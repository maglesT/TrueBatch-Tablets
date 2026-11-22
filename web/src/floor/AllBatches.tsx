import { useEffect, useState } from 'react';
import { api } from '../api.js';
import { batchLink, go, pdfLink, plainClock, plainError, releaseLink, statusText, STATUS_CHIP } from '../api-floor.js';
import './floor.css';

interface Row { id: number; batchNo: string; productCode: string; productName: string; status: string; issuedAt: string }

// "All batches": every batch, newest first (the latest 200), so a released or closed batch is found from the menu.
export function AllBatches() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [prod, setProd] = useState('');
  const [q, setQ] = useState('');
  useEffect(() => { void api<Row[]>('GET', '/api/batches/all').then(setRows, (e) => setError(plainError(e))); }, []);
  const statuses = [...new Set((rows ?? []).map((r) => r.status))];
  const products = [...new Map((rows ?? []).map((r) => [r.productCode, r.productName])).entries()];
  const shown = (rows ?? []).filter((r) => (!status || r.status === status) && (!prod || r.productCode === prod) && (!q.trim() || r.batchNo.toLowerCase().includes(q.trim().toLowerCase())));
  return (
    <div className="fl">
      <h1>All batches</h1>
      <p className="greeting">Newest first. Times are plant time (IST).</p>
      {error && <p className="notice bad" role="alert">{error}</p>}
      {rows === null && !error && <div className="dash-panel" aria-label="Loading"><div className="skel skel-line w30" />{[0, 1].map((i) => <div key={i} className="skel skel-row" />)}</div>}
      {rows && rows.length === 0 && <p className="notice">No batch has been issued yet.</p>}
      {rows && rows.length > 0 && (
        <div className="all-filter">
          <input type="search" aria-label="Search by batch number" placeholder="Batch number" value={q} onChange={(e) => setQ(e.target.value)} />
          <select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All statuses</option>{statuses.map((x) => <option key={x} value={x}>{statusText(x, true)}</option>)}
          </select>
          <select aria-label="Product" value={prod} onChange={(e) => setProd(e.target.value)}>
            <option value="">All products</option>{products.map(([c, n]) => <option key={c} value={c}>{c} · {n}</option>)}
          </select>
        </div>
      )}
      {rows && rows.length > 0 && shown.length === 0 && <p className="notice">No batch matches.</p>}
      {rows && shown.length > 0 && (
        <section className="dash-panel" aria-label="All batches">
          <div className="pending-list">
            {shown.map((b) => (
              <div key={b.id} className="pending-row">
                <span className="age-dot" aria-hidden="true" />
                <span className="pending-what">
                  <strong><a href={batchLink(b.id)}>{b.batchNo} · {b.productName}</a></strong>
                  <small>{b.productCode} · issued {plainClock(b.issuedAt)}</small>
                </span>
                <span className="all-go">
                  <span className={`chip ${STATUS_CHIP[b.status] ?? ''}`}>{statusText(b.status, true)}</span>
                  <button className="link" onClick={() => go(batchLink(b.id))}>Batch</button>
                  {b.status !== 'in production' && <button className="link" onClick={() => go(releaseLink(b.id))}>Release</button>}
                  <a className="link" href={pdfLink(b.id)} download>PDF</a>
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
