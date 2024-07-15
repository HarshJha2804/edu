import React, { useEffect, useState } from 'react';

interface CounterProps {
  targetNumber: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * targetNumber));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return <div className="counter">{count}</div>;
};

export default Counter;
