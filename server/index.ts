import { createHash } from 'node:crypto';
import { buildApp } from './app.js';
import { loadConfig } from './config.js';
import { connect } from './db.js';
import { oidcSignOn } from './signon.js';
import { sqlMaster } from './master.js';
import { scheduleLate } from './late.js';

const config = loadConfig();
const sql = connect(config.DATABASE_URL, { role: config.DB_APP_ROLE });
const signOn = oidcSignOn({ issuer: config.OIDC_ISSUER, clientId: config.OIDC_CLIENT_ID, clientSecret: config.OIDC_CLIENT_SECRET,
  redirectUri: config.OIDC_REDIRECT_URI });
// Signing proofs (PL-05) stay valid across a restart and between instances: the key is derived from the client secret.
const proofKey = createHash('sha256').update(`truebatch-signing-proof:${config.OIDC_CLIENT_SECRET}`).digest();
const md = connect(config.MASTER_DATA_DATABASE_URL);
const app = await buildApp({ sql, signOn, proofKey, master: sqlMaster(md), logger: true, cookieSecure: config.COOKIE_SECURE,
  batchPrefix: config.BATCH_PREFIX });

await app.listen({ port: config.PORT, host: config.HOST });
// A hold time or periodic check that ran over is recorded once (server/late.ts).
const stopLate = scheduleLate(sql, (msg) => app.log.info(msg));

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, async () => {
    stopLate();
    await app.close();
    await sql.end();
    await md.end();
    process.exit(0);
  });
}
