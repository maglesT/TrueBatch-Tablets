export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message?: string,
    // Validation problems listed by the server, shown to the user.
    public problems: string[] = [],
  ) {
    super(message ?? code);
  }
}

// background: polls that must not keep an idle session alive (server checks this header).
// Two parts of a screen asking for the same data at the same moment share one request.
const inFlight = new Map<string, Promise<unknown>>();
export function api<T>(method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: object, background = false): Promise<T> {
  if (method !== 'GET') return request<T>(method, url, body, background);
  const running = inFlight.get(url);
  if (running) return running as Promise<T>;
  const p = request<T>(method, url, body, background).finally(() => inFlight.delete(url));
  inFlight.set(url, p);
  return p;
}
async function request<T>(method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: object, background = false): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      ...(method === 'GET' ? {} : { 'content-type': 'application/json' }),
      ...(background ? { 'x-background-poll': '1' } : {}),
    },
    body: method === 'GET' ? undefined : JSON.stringify(body ?? {}),
    credentials: 'same-origin',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(res.status, data.error ?? 'error', data.message, data.problems ?? []);
  return data as T;
}

// This product's permission codes from core; the server checks every action again.
export interface Me {
  id: number;
  username: string;
  fullName: string;
  permissions: string[];
}
export const can = (me: Me, code: string) => me.permissions.includes(`truebatch.${code}`);

// Times are shown in plant time with the zone label.
export function plantTime(iso: string | null): string {
  if (!iso) return '—';
  const s = new Date(iso).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  return `${s} IST`;
}

// The meanings of server/signatures.ts, as the sign dialog shows them.
export const MEANING_LABEL: Record<string, string> = {
  prepared: 'Prepared',
  checked: 'Checked',
  approved: 'Approved',
  issued: 'Issued',
  performed: 'Performed',
  verified: 'Verified (second person)',
  production_approved: 'Production approved',
  qc_approved: 'QC approved',
  released: 'Released',
};

// PL-05: a signing proof from core's re-authentication. A small window opens /sign, core asks for the password again,
// and /cb posts the proof back to this window (same origin only).
export function getSignProof(meanings: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const w = window.open(`/sign?meanings=${meanings.join(',')}`, 'medhanta-sign', 'width=480,height=640');
    if (!w) return reject(new Error('Allow pop-up windows for this site to sign.'));
    const done = (fn: () => void) => { window.removeEventListener('message', onMessage); clearInterval(timer); fn(); };
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.source !== w) return;
      const m = e.data as { signProof?: string; signError?: string };
      if (m.signProof) done(() => resolve(m.signProof!));
      else if (m.signError) done(() => reject(new Error(m.signError)));
    };
    window.addEventListener('message', onMessage);
    const timer = setInterval(() => { if (w.closed) done(() => reject(new Error('Signing was cancelled.'))); }, 500);
  });
}
