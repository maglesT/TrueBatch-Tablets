import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { batchLink, go, plainClock, plainError, releaseLink, statusText, STATUS_CHIP } from '../api-floor.js';
import './floor.css';

interface Row { id: number; batchNo: string; productCode: string; productName: string; status: string; issuedAt: string }

// "All batches": every batch, newest first (the latest 200), so a released or closed batch is found from the menu.
export function AllBatches() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState('');
  useEffect(() => { void api<Row[]>('GET', '/api/batches/all').then(setRows, (e) => setError(plainError(e))); }, []);
  return (
    <div className="fl">
      <h1>All batches</h1>
      <p className="greeting">Newest first. Times are plant time (IST).</p>
      {error && <p className="notice bad" role="alert">{error}</p>}
      {rows === null && !error && <div className="dash-panel" aria-label="Loading"><div className="skel skel-line w30" />{[0, 1].map((i) => <div key={i} className="skel skel-row" />)}</div>}
      {rows && rows.length === 0 && <p className="notice">No batch has been issued yet.</p>}
      {rows && rows.length > 0 && (
        <section className="dash-panel" aria-label="All batches">
          <div className="pending-list">
            {rows.map((b) => (
              <div key={b.id} className="pending-row">
                <span className="age-dot" aria-hidden="true" />
                <span className="pending-what">
                  <strong><a href={batchLink(b.id)}>{b.batchNo} · {b.productName}</a></strong>
                  <small>{b.productCode} · issued {plainClock(b.issuedAt)}</small>
                </span>
                <span className={`chip ${STATUS_CHIP[b.status] ?? ''}`}>{statusText(b.status, true)}</span>
                <button className="link" onClick={() => go(batchLink(b.id))}>Batch</button>
                {b.status !== 'in production' && <button className="link" onClick={() => go(releaseLink(b.id))}>Release</button>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
