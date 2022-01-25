import { useEffect, useState } from 'react';

export const useCountDown = (initCountSecond: number) => {
  const [count, setCount] = useState<number>(initCountSecond);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
};
