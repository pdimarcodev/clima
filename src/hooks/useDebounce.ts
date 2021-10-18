import {useEffect, useState} from 'react';

export const useDebounce = (input: string = '', time: number = 300) => {
  const [debounced, setDebounced] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debounced;
};
