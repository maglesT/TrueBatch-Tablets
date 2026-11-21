-- Fix 1121 B2 (for Medhanta LIMS): the dissolution profile of an extended-release tablet (dissolution-er), one in-process
-- test per time point, each a staged list of 6, 6 more and 12 more units: code 'dissolution-er.t<n>' (several staged
-- lists in one block: '<block id>.<first field>', shared/engine/lims.ts ipcCodes). lab_field_parameters gains three
-- columns at its end: label_part_setting and label_part (the master's time point, "1 h", replaces "time point 1" in the
-- label) and when_setting (time points 2 to 4 are asked only when the master names them). master_lab_field_v1 is
-- replaced in place with the same columns. Packing migrates this file too (as 0029).

create or replace view lab_field_parameters (block, block_name, field, code, label, label_setting, unit, unit_setting, individual, label_part_setting, label_part, when_setting) as values
  ('blend-uniformity', 'Blend uniformity sampling', 'results', 'blend-uniformity.results', 'Content at 10 locations (% of label claim)', null, '%', null, 10, null::text, null::text, null::text),
  ('dissolution', 'Dissolution (QC lab)', 'results', 'dissolution', 'Dissolved, 6 units (% of label claim), then dissolved, 6 more units (% of label claim), then dissolved, 12 more units (% of label claim)', null, '%', null, 24, null, null, null),
  ('dissolution-er', 'Dissolution profile, extended release (QC lab)', 't1', 'dissolution-er.t1', 'Dissolved at time point 1, 6 units (% of label claim), then dissolved at time point 1, 6 more units (% of label claim), then dissolved at time point 1, 12 more units (% of label claim)', null, '%', null, 24, 'time1', 'time point 1', null),
  ('dissolution-er', 'Dissolution profile, extended release (QC lab)', 't2', 'dissolution-er.t2', 'Dissolved at time point 2, 6 units (% of label claim), then dissolved at time point 2, 6 more units (% of label claim), then dissolved at time point 2, 12 more units (% of label claim)', null, '%', null, 24, 'time2', 'time point 2', 'time2'),
  ('dissolution-er', 'Dissolution profile, extended release (QC lab)', 't3', 'dissolution-er.t3', 'Dissolved at time point 3, 6 units (% of label claim), then dissolved at time point 3, 6 more units (% of label claim), then dissolved at time point 3, 12 more units (% of label claim)', null, '%', null, 24, 'time3', 'time point 3', 'time3'),
  ('dissolution-er', 'Dissolution profile, extended release (QC lab)', 't4', 'dissolution-er.t4', 'Dissolved at time point 4, 6 units (% of label claim), then dissolved at time point 4, 6 more units (% of label claim), then dissolved at time point 4, 12 more units (% of label claim)', null, '%', null, 24, 'time4', 'time point 4', 'time4'),
  ('uniformity-by-weight', 'Uniformity by weight variation', 'assay', 'uniformity-by-weight.assay', 'Assay (% of label claim, QC report)', null, '%', null, null::int, null, null, null),
  ('content-uniformity', 'Content uniformity sampling', 'results', 'content-uniformity', 'Content of 10 tablets (% of label claim), then content of 20 more tablets (% of label claim)', null, '%', null, 30, null, null, null),
  ('lab-tests', 'In-process lab tests (QC lab)', 'test1', 'lab-tests.test1', 'Lab test 1', 'what1', null, 'unit1', null::int, null, null, null),
  ('lab-tests', 'In-process lab tests (QC lab)', 'test2', 'lab-tests.test2', 'Lab test 2', 'what2', null, 'unit2', null::int, null, null, null),
  ('lab-tests', 'In-process lab tests (QC lab)', 'test3', 'lab-tests.test3', 'Lab test 3', 'what3', null, 'unit3', null::int, null, null, null)
;

do $$
declare
  rep text := case when current_schema() = 'public' then 'report' else current_schema() || '_report' end;
begin
  perform set_config('search_path', format('%I, %I', rep, current_schema()), true);
end $$;

create or replace view master_lab_field_v1 with (security_barrier) as
with steps as (
  select v.id as version_id, s.stage_no, t.step_no, s.stage, t.step,
    count(*) over (partition by v.id, t.step->'block'->>'id') as times,
    row_number() over (partition by v.id, t.step->'block'->>'id' order by s.stage_no, t.step_no) as occurrence
  from master_versions v
  cross join lateral jsonb_array_elements(v.doc->'stages') with ordinality s(stage, stage_no)
  cross join lateral jsonb_array_elements(s.stage->'steps') with ordinality t(step, step_no)
  where v.state not in ('retired', 'deleted')
)
select v.doc->'header'->>'productCode' as product_code, v.version_no as master_version, v.state as master_state,
  x.stage->>'name' as stage_title,
  coalesce(nullif(x.step->>'name', ''), p.block_name || coalesce(': ' || (
    select l->>'name' from jsonb_each(x.step->'settings') e cross join jsonb_array_elements(v.doc->'formula') l
    where jsonb_typeof(e.value) = 'object' and e.value ? 'formula' and l->>'key' = e.value->>'formula' limit 1), '')) as step_title,
  p.code || case when x.times > 1 then '@' || x.occurrence else '' end as code,
  coalesce(nullif(trim(x.step->'settings'->>p.label_setting), ''),
    case when nullif(trim(x.step->'settings'->>p.label_part_setting), '') is not null then replace(p.label, p.label_part, trim(x.step->'settings'->>p.label_part_setting)) end,
    p.label) as label,
  coalesce(p.unit, x.step->'settings'->>p.unit_setting) as unit,
  p.individual,
  greatest(v.created_at, (select max(e.at) from master_events e where e.version_id = v.id)) as data_as_of
from steps x
join master_versions v on v.id = x.version_id
join lab_field_parameters p on p.block = x.step->'block'->>'id'
where coalesce(p.unit, x.step->'settings'->>p.unit_setting, '') <> ''
  -- B2: a test asked only when the master names it (a second time point of a dissolution profile).
  and (p.when_setting is null or nullif(trim(x.step->'settings'->>p.when_setting), '') is not null);

revoke all on master_lab_field_v1 from public;
comment on view master_lab_field_v1 is 'One row per in-process lab test of each master version that is not retired: product, version, stage and step, the test code as lab_request_v1 names it, label, unit, number of values. For LIMS in-process specifications.';

reset search_path;
