import { useEffect, useState } from "react";


export const useDebounce = (value: string, delay: number) => {
  const [debountceValue, setDebountceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebountceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debountceValue;
};
