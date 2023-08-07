import { Suspense, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchDitto(): Promise<any> {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  if (pokemon.ok) {
    return pokemon.json();
  }

  throw new Error("API Error");
}

export const NotWorkingSuspense = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Ditto />
    </Suspense>
  );
};

const Ditto = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ditto = useRef<any>(undefined);

  if (!ditto.current) {
    throw fetchDitto()
      .then((response) => response.json())
      .then((data) => {
        ditto.current = data;
      });
  }

  return <img src={ditto.current?.sprites?.front_default} alt="ditto" />;
};
