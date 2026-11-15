import type { Me } from '../api.js';

// "My work": what waits for the signed-in person (steps to perform or check, records to approve or release).
// Empty in the skeleton.
export function Home({ me }: { me: Me }) {
  return (
    <>
      <h1>My work</h1>
      <p className="greeting">Signed in as {me.fullName}.</p>
      <div className="card placeholder">
        <p>Nothing here yet. Batch records, master versions and the steps waiting for you will be listed here.</p>
      </div>
    </>
  );
}
