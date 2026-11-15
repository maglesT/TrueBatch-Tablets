// Screen 5: the master check, always beside the designer. Each problem from shared/master/checks.ts links to its item.
import type { Problem } from '../../../shared/master/checks.js';
import type { MasterDoc } from '../../../shared/master/schema.js';
import { placeLabel } from './model.js';

export function CheckPanel({ doc, problems, invalid, onGo }: { doc: MasterDoc; problems: Problem[] | null; invalid?: string; onGo: (path: string) => void }) {
  const errors = problems?.filter((p) => p.level === 'error').length ?? 0;
  const warnings = problems?.filter((p) => p.level === 'warning').length ?? 0;
  return (
    <aside className="check-panel" aria-label="Master check">
      <div className="cp-head">
        <h2>Master check</h2>
        {problems && (errors || warnings ? <span className={errors ? 'count bad' : 'count'}>{errors + warnings}</span> : null)}
      </div>
      {invalid ? <p className="cp-invalid">The master is checked once every entry is complete. {invalid}</p>
        : problems && !problems.length ? <p className="all-good small">✓ No problems. The master can be sent for review.</p>
        : problems && (
          <>
            <p className="muted small">{errors ? `${errors} ⛔ to fix before review` : 'No ⛔'}{warnings ? ` · ${warnings} ⚠️ to look at` : ''}</p>
            <ul className="cp-list">
              {problems.map((p, i) => (
                <li key={i} className={p.level}>
                  <button type="button" onClick={() => onGo(p.path)}>
                    <span className="cp-icon" aria-label={p.level === 'error' ? 'Error' : 'Warning'}>{p.level === 'error' ? '⛔' : '⚠️'}</span>
                    <span><span className="cp-where">{placeLabel(doc, p.path)}{p.rule && <span className="cp-rule">{p.rule}</span>}</span>{p.message}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
    </aside>
  );
}
