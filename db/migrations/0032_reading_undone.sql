-- Fix round 21 Nov 2026 (B3): reading_v1 leaves out the readings of a weighing undone to weigh another lot (A7): a
-- step's readings are those recorded since it was last undone, and only once it is signed done again (as
-- material_use_v1, 0031). Same name, columns and meaning (0023, 0028), replaced in place. Tablets only: packing does
-- not migrate this file.

do $$
declare
  rep text := case when current_schema() = 'public' then 'report' else current_schema() || '_report' end;
begin
  perform set_config('search_path', format('%I, %I', rep, current_schema()), true);
end $$;

create or replace view reading_v1 with (security_barrier) as
select b.batch_no || '/' || concat_ws('.', c.stage, c.sub, c.step, c.round) || '/' || c.field || '/' || r.n as reading_id,
  b.batch_no as batch_number, v.doc->'header'->>'productCode' as product_code,
  v.doc->'stages'->c.stage->>'name' as stage, (v.doc->'stages'->c.stage->>'key') || '/' || (st.step->>'key') as step,
  coalesce(d.place, (v.doc->'stages'->c.stage->>'name') || ' › ' || (st.step->>'key')) as step_name, c.sub as sub_batch, c.round,
  p.block, case when p.block = 'check' and st.step->'settings'->>'what' <> '' then st.step->'settings'->>'what'
    when p.block = 'lab-tests' and st.step->'settings'->>('what' || substr(p.field, 5)) <> '' then st.step->'settings'->>('what' || substr(p.field, 5)) else p.label end as parameter,
  p.field, r.n::int as reading_no, (r.x->>'value')::numeric as value, r.x->>'unit' as unit,
  case when coalesce(lim.l, p.fixed_limit)->>'low' ~ '^-?[0-9]+(\.[0-9]+)?$' then (coalesce(lim.l, p.fixed_limit)->>'low')::numeric end as low_limit,
  case when coalesce(lim.l, p.fixed_limit)->>'high' ~ '^-?[0-9]+(\.[0-9]+)?$' then (coalesce(lim.l, p.fixed_limit)->>'high')::numeric end as high_limit,
  coalesce(lim.l, p.fixed_limit)->>'unit' as limit_unit, case when coalesce(lim.l, p.fixed_limit) is null then null else p.limit_of end as limit_of,
  c.at as recorded_at, c.kind = 'corrected' as corrected, now() as read_at, c.at as data_as_of
from (
  -- The current value of each field of each round of a step: the last value or correction that recorded it.
  select distinct on (x.batch_id, x.stage, x.sub, x.step, x.round, f.key) x.batch_id, x.stage, x.sub, x.step, x.round, f.key as field, f.value, x.kind, x.at
  from step_events x cross join jsonb_each(x.payload->'values') f
  where x.kind in ('value', 'corrected') and jsonb_typeof(x.payload->'values') = 'object'
    -- A7: only what was recorded since the step was last undone.
    and x.id > coalesce((select max(u.id) from step_events u where u.batch_id = x.batch_id and u.stage = x.stage and u.sub = x.sub
      and u.step = x.step and u.round = x.round and u.kind = 'undone'), 0)
  order by x.batch_id, x.stage, x.sub, x.step, x.round, f.key, x.id desc
) c
join batches b on b.id = c.batch_id
join master_versions v on v.id = b.master_version_id
cross join lateral (select v.doc->'stages'->c.stage->'steps'->c.step as step) st
join reading_parameters p on p.block = st.step->'block'->>'id' and p.field = c.field
-- Signed done (this round) since it was last undone (A7), with the step's place in words as kept with its start.
cross join lateral (
  select bool_or(e.kind = 'done' and e.id > coalesce((select max(u.id) from step_events u where u.batch_id = c.batch_id and u.stage = c.stage
      and u.sub = c.sub and u.step = c.step and u.round = c.round and u.kind = 'undone'), 0)) as done, (array_agg(e.payload->>'where' order by e.id) filter (where e.kind = 'started'))[1] as place
  from step_events e where e.batch_id = c.batch_id and e.stage = c.stage and e.sub = c.sub and e.step = c.step and e.round = c.round
) d
-- One reading, or each reading of a list in order.
cross join lateral (
  select c.value as x, 1::bigint as n where jsonb_typeof(c.value) = 'object'
  union all
  select a.x, a.n from jsonb_array_elements(case when jsonb_typeof(c.value) = 'array' then c.value else '[]' end) with ordinality a(x, n)
) r
-- The master step's limit, when it is a written one (low and/or high with a unit; not an earlier step's result).
left join lateral (
  select st.step->'settings'->p.limit_setting as l
  where p.limit_setting is not null and jsonb_typeof(st.step->'settings'->p.limit_setting) = 'object' and st.step->'settings'->p.limit_setting ? 'unit'
) lim on true
where d.done and jsonb_typeof(r.x) = 'object' and r.x->>'value' ~ '^-?[0-9]+(\.[0-9]+)?$';

revoke all on reading_v1 from public;
comment on view reading_v1 is 'One row per recorded number of a step signed done (process parameters and in-process checks), with the master''s limits; for continued process verification (Operations).';
comment on column reading_v1.limit_of is 'each: the limit applies to each reading; mean: to the mean of the list (T7). Null without a limit.';

reset search_path;
