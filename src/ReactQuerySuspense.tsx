import { Suspense } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ErrorBoundary } from "./ErrorBoundary";

const queryClient = new QueryClient();

export const ReactQuerySuspense = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary fallback={<p>Error!</p>}>
      <Suspense fallback={<p>Loading...</p>}>
        <Ditto />
      </Suspense>
    </ErrorBoundary>
  </QueryClientProvider>
);

const Ditto = () => {
  const ditto = useQuery(
    "ditto",
    async () => (await fetch("https://pokeapi.co/api/v2/pokemon/ditto")).json(),
    { suspense: true }
  );

  return <img src={ditto.data.sprites.front_default} alt="ditto" />;
};
