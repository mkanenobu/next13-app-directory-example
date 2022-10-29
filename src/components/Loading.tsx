"use client";
import { type FC, useState, useEffect } from "react";

export const Loading: FC = () => {
  const [counter, setCounter] = useState(2);
  const countUp = () => setCounter((p) => (p + 1) % 3);

  useEffect(() => {
    const timerId = setInterval(countUp, 500);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Loading{".".repeat(counter + 1)}</div>;
};
