import { useState } from "react";

const useCounter = (init: number) => {
  const [count, setCount] = useState(init);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => prev - 1);

  return { inc, dec, count };
};

export default useCounter;
