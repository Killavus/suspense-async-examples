import { Suspense, use } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchDitto(): Promise<any> {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  if (pokemon.ok) {
    const data = await pokemon.json();
    return data;
  }
  throw new Error("API Error");
}

export const UseSuspense = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Ditto />
    </Suspense>
  );
};

const Ditto = () => {
  const ditto = use(fetchDitto());

  return <img src={ditto.sprites?.front_default} alt="ditto" />;
};
