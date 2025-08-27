import { useState } from 'react';

export const useCounter = (initialValue: number = 1) => {
  const [count, setCount] = useState<number>(initialValue)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count <= 1) return;
    setCount(count - 1);
  }

  return {
    // Properties
    count,

    //methods
    increment,
    decrement
  }
}
