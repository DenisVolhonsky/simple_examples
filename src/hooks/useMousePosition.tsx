import { useEffect, useState } from "react";
import useTrottle from "./useTrottle.tsx";
import useDebounce from "./useDebounce.tsx";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // const trottledsetPosition = useTrottle(setPosition, 1000);

  useEffect(() => {
    const handlePosition = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  const debouncesetPosition = useDebounce(position, 400);

  return debouncesetPosition;
};

export default useMousePosition;
