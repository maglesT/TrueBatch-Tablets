// Sign-on goes through Medhanta core: the button sends the browser to core's sign-in page.
export function Login() {
  return (
    <main className="page narrow login">
      <img className="login-logo" src="/truebatch-logo.png" alt="TrueBatch" />
      <h1>TrueBatch Tablets</h1>
      <p className="muted">Electronic batch records for tablet manufacturing, from dispensing to QA release. Sign in with your own Medhanta login.</p>
      <div className="card">
        <a className="button primary" href="/login">Sign in</a>
      </div>
    </main>
  );
}
