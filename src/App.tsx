import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="sleep">Sleep</Link>
      <Link to="not-working">Fetch - Naive (not working)</Link>
      <Link to="use">Fetch - w/use</Link>
      <Link to="conditional">Conditional Use</Link>
      <Link to="error">Error handling</Link>
      <Link to="rq">Suspense w/ React Query</Link>

      <Outlet />
    </>
  );
}

export default App;
