import { useCallback, useEffect, useState } from 'react';
import { api, ApiError, type Me } from './api.js';
import { Login } from './pages/Login.js';
import { Home } from './pages/Home.js';

type Page = 'home';

export function App() {
  const [me, setMe] = useState<Me | null | undefined>(undefined);
  const [page, setPage] = useState<Page>('home');

  const refresh = useCallback(async () => {
    try {
      setMe(await api<Me>('GET', '/api/me'));
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) setMe(null);
      else throw e;
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  if (me === undefined) return <main className="page">Loading…</main>;
  if (me === null) return <Login />;

  // Ends the core session too (shared terminals, one person per browser): the browser goes to core's sign-out page.
  const logout = async () => {
    const r = await api<{ logoutUrl: string | null }>('POST', '/api/logout');
    setMe(null);
    if (r.logoutUrl) window.location.assign(r.logoutUrl);
  };

  return (
    <>
      <header className="bar">
        <span className="brand"><img className="brand-mark" src="/truebatch-mark.svg" alt="TrueBatch" /><span><b>TrueBatch Tablets</b><small>by Medhanta</small></span></span>
        <nav>
          <button className={page === 'home' ? 'tab on' : 'tab'} onClick={() => setPage('home')}>My work</button>
        </nav>
        <span className="who">
          {me.fullName}
          <button className="link" onClick={logout}>Log out</button>
        </span>
      </header>
      <main className="page">
        {page === 'home' && <Home me={me} />}
      </main>
    </>
  );
}
