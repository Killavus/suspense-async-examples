import { Suspense } from "react";

let done = false;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sleepSuspense(ms: number) {
  if (done) {
    return 42;
  } else {
    done = true;
    throw sleep(ms);
  }
}

export const SleepSuspense = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Sleepy />
    </Suspense>
  );
};

const Sleepy = () => {
  const answer = sleepSuspense(5000);

  return <p>The answer is: {answer}</p>;
};
