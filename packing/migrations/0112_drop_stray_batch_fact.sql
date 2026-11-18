-- Packing does not publish batch_fact_v1 (TrueBatch Tablets does). Tablets migration 0017 was missing from the packing
-- skip list, so it built that view in packing's report schema; 0017 is now skipped and the stray view is removed.
-- The report schema is `report` for an installation in `public`, <s>_report for a test schema <s> (as in 0006).

do $$
declare
  rep text := case when current_schema() = 'public' then 'report' else current_schema() || '_report' end;
begin
  execute format('drop view if exists %I.batch_fact_v1', rep);
end $$;
