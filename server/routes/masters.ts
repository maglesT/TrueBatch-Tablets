import type { FastifyInstance, FastifyReply } from 'fastify';
import { z } from 'zod';
import type { Sql, Tx } from '../db.js';
import { audit } from '../audit.js';
import { parseId, requirePermission } from '../auth.js';
import { usableItem, type Master } from '../master.js';
import { BLOCKS } from '../../shared/blocks/index.js';
import { masterChecks } from '../../shared/master/checks.js';
import { masterSchema, type MasterDoc, type MasterState } from '../../shared/master/schema.js';

// Master versions: the model, the table and the draft routes. The designer and the review and approval workflow come
// later; until then a version leaves draft only through that workflow (or, in tests, the database owner).

export interface VersionRow { id: number; masterId: number; versionNo: number; state: MasterState; doc: MasterDoc; createdBy: number; createdAt: Date }

export async function masterVersion(q: Sql | Tx, id: number, lock = false): Promise<VersionRow | undefined> {
  const rows = lock
    ? await q<VersionRow[]>`select id::int, master_id::int as "masterId", version_no as "versionNo", state, doc, created_by::int as "createdBy", created_at as "createdAt"
        from master_versions where id = ${id} for share`
    : await q<VersionRow[]>`select id::int, master_id::int as "masterId", version_no as "versionNo", state, doc, created_by::int as "createdBy", created_at as "createdAt"
        from master_versions where id = ${id}`;
  return rows[0];
}

// PL-08: the product and every material must be active in master data now; their code and name are copied from it.
async function withMasterData(master: Master, doc: MasterDoc): Promise<MasterDoc> {
  const product = usableItem(await master.products(), doc.header.productItemId, 'product');
  const materials = await master.materials();
  return {
    ...doc,
    header: { ...doc.header, productCode: product.code, productName: product.name },
    formula: doc.formula.map((l) => {
      const m = usableItem(materials, l.materialItemId, 'material');
      return { ...l, code: m.code, name: m.name };
    }),
  };
}

const docBody = z.object({ doc: masterSchema });
const invalid = (reply: FastifyReply, issues?: z.ZodIssue[]) =>
  reply.code(400).send({ error: 'invalid', problems: (issues ?? []).map((i) => `${i.path.join('.')}: ${i.message}`) });

export function masterRoutes(app: FastifyInstance, sql: Sql) {
  const anyUser = { preHandler: requirePermission() };
  const author = { preHandler: requirePermission('truebatch.master.author') };

  app.get('/api/blocks', anyUser, async () => BLOCKS);

  app.get('/api/masters', anyUser, async () => sql`
    select id::int, master_id::int as "masterId", version_no as "versionNo", state, doc->'header' as header, created_at as "createdAt"
    from master_versions order by master_id, version_no`);

  // A new master: version 1, a draft.
  app.post('/api/masters', author, async (req, reply) => {
    const b = docBody.safeParse(req.body);
    if (!b.success) return invalid(reply, b.error.issues);
    const doc = await withMasterData(app.master, b.data.doc);
    return sql.begin(async (tx) => {
      const [v] = await tx<{ id: number; masterId: number }[]>`
        insert into master_versions (version_no, doc, created_by) values (1, ${tx.json(doc as never)}, ${req.user!.id})
        returning id::int, master_id::int as "masterId"`;
      await audit(tx, { actorId: req.user!.id, action: 'master.created', objectType: 'master_version', objectId: v!.id, new: doc });
      return { id: v!.id, masterId: v!.masterId, versionNo: 1 };
    });
  });

  // A new draft version of a master, starting from its latest version (or from the document sent).
  app.post<{ Params: { masterId: string } }>('/api/masters/:masterId/versions', author, async (req, reply) => {
    const masterId = parseId(req.params.masterId);
    const b = z.object({ doc: masterSchema.optional() }).safeParse(req.body);
    if (masterId === null || !b.success) return invalid(reply, b.error?.issues);
    const [latest] = await sql<{ versionNo: number; doc: MasterDoc }[]>`
      select version_no as "versionNo", doc from master_versions where master_id = ${masterId} order by version_no desc limit 1`;
    if (!latest) return reply.code(404).send({ error: 'not_found' });
    const doc = await withMasterData(app.master, b.data.doc ?? latest.doc);
    try {
      return await sql.begin(async (tx) => {
        const [v] = await tx<{ id: number }[]>`
          insert into master_versions (master_id, version_no, doc, created_by) values (${masterId}, ${latest.versionNo + 1}, ${tx.json(doc as never)}, ${req.user!.id})
          returning id::int`;
        await audit(tx, { actorId: req.user!.id, action: 'master.version_created', objectType: 'master_version', objectId: v!.id, new: doc });
        return { id: v!.id, masterId, versionNo: latest.versionNo + 1 };
      });
    } catch (e) {
      if ((e as { code?: string }).code === '23505') return reply.code(409).send({ error: 'draft_exists', message: 'This master already has a draft version.' });
      throw e;
    }
  });

  app.get<{ Params: { id: string } }>('/api/master-versions/:id', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const v = id === null ? undefined : await masterVersion(sql, id);
    return v ?? reply.code(404).send({ error: 'not_found' });
  });

  // Only a draft is edited; the database refuses any change to a version that left draft.
  app.put<{ Params: { id: string } }>('/api/master-versions/:id', author, async (req, reply) => {
    const id = parseId(req.params.id);
    const b = docBody.safeParse(req.body);
    if (id === null || !b.success) return invalid(reply, b.error?.issues);
    const doc = await withMasterData(app.master, b.data.doc);
    return sql.begin(async (tx) => {
      const v = await masterVersion(tx, id, true);
      if (!v) return reply.code(404).send({ error: 'not_found' });
      if (v.state !== 'draft') return reply.code(409).send({ error: 'locked', message: `This version is ${v.state.replace('_', ' ')} and cannot be changed.` });
      await tx`update master_versions set doc = ${tx.json(doc as never)} where id = ${id}`;
      await audit(tx, { actorId: req.user!.id, action: 'master.updated', objectType: 'master_version', objectId: id, old: v.doc, new: doc });
      return { ok: true };
    });
  });

  app.get<{ Params: { id: string } }>('/api/master-versions/:id/checks', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const v = id === null ? undefined : await masterVersion(sql, id);
    if (!v) return reply.code(404).send({ error: 'not_found' });
    return { problems: masterChecks(v.doc) };
  });
}
