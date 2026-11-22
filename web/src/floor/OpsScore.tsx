// Fix 1121 B5: Operations' live scoring of this batch against the product's good batches, for information only. It
// never blocks or changes a step, a check or a release (the GMP checks are TrueBatch's own). Nothing is shown when
// Operations is not linked, its view is missing, or it has not scored the batch.
import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { plainClock } from '../api-floor.js';

interface Score {
  stageTitle: string | null; stepTitle: string | null; level: 'usual' | 'unusual' | 'very_unusual' | 'too_few_batches'; reasons: string[];
  valuesSeen: number | null; valuesTotal: number | null; expectedFinishAt: string | null; finishFrom: string | null; finishTo: string | null;
  expectedYieldPercent: string | null; yieldFrom: string | null; yieldTo: string | null; scoredAt: string | null;
}
const LEVEL: Record<Score['level'], string> = { usual: 'usual', unusual: 'unusual', very_unusual: 'very unusual', too_few_batches: 'too few good batches to compare yet' };
const pct = (x: string | null) => (x === null ? '' : `${Number(x).toFixed(1)} %`);

export function OpsScore({ id }: { id: number }) {
  const [s, setS] = useState<Score | null>(null);
  useEffect(() => {
    let on = true;
    setS(null);
    api<{ score: Score | null }>('GET', `/api/batches/${id}/operations`, undefined, true).then((r) => on && setS(r.score), () => {});
    return () => { on = false; };
  }, [id]);
  if (!s) return null;
  const range = (a: string | null, b: string | null, f: (x: string) => string) => (a && b ? ` (${f(a)} to ${f(b)})` : '');
  return (
    <aside className="notice info ops-score" aria-label="RISE scoring (information only)">
      <p><b>Compared with good batches: {LEVEL[s.level]}</b>{s.reasons.length && s.level !== 'usual' ? ` (${s.reasons.join('; ')})` : ''}
        {s.valuesTotal ? <span className="muted small"> · {s.valuesSeen ?? 0} of {s.valuesTotal} values seen</span> : null}</p>
      {s.expectedFinishAt && <p>Expected finish {plainClock(s.expectedFinishAt)}{range(s.finishFrom, s.finishTo, plainClock)}</p>}
      {s.expectedYieldPercent && <p>Expected yield {pct(s.expectedYieldPercent)}{range(s.yieldFrom, s.yieldTo, pct)}</p>}
      <p className="muted small">From RISE{s.stageTitle ? `, at ${s.stageTitle}${s.stepTitle ? ` › ${s.stepTitle}` : ''}` : ''}{s.scoredAt ? `, as of ${plainClock(s.scoredAt)}` : ''}. Information only: it does not decide anything in this record.</p>
    </aside>
  );
}
