import { useState, useEffect } from 'react';

const useCounter = (isPositve) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      isPositve
        ? setCounter((prevCounter) => prevCounter + 1)
        : setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPositve]);

  return counter;
};

export default useCounter;
