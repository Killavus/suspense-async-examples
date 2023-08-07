import { Suspense, use, cache, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchDitto(): Promise<any> {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  if (pokemon.ok) {
    const data = await pokemon.json();
    return data;
  }
  throw new Error("API Error");
}

const fetchDittoCached = cache(fetchDitto);

export const ConditionalUseSuspense = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Ditto />
    </Suspense>
  );
};

const Ditto = () => {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Ditto
      </button>
    );
  }

  const ditto = use(fetchDittoCached());

  return <img src={ditto.sprites?.front_default} alt="ditto" />;
};
