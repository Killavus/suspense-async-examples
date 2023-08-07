import { Suspense, use } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

async function fail(): Promise<number> {
  throw new Error("failed!");
}

export const ErrorSuspense = () => {
  return (
    <ErrorBoundary fallback={<p>Error!</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <FailComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

const FailComponent = () => {
  const foo = use(fail());

  return <p>Never happen. {foo}</p>;
};
