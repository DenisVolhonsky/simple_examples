import React, { useRef } from "react";

const useTrottle = (func, delay) => {
  const isTrottle = useRef(false);
  return (...args) => {
    if (!isTrottle.current) {
      func(...args);
      isTrottle.current = true;

      setTimeout(() => {
        isTrottle.current = false;
      }, delay);
    }   
  };
};

export default useTrottle;
