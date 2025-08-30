import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (interationNumber: number) => {
  console.time('Heavy_stuff_started');


  for (let index = 0; index < interationNumber; index++) {
    console.log('Ahi vamos...');
    
  }

  console.timeEnd('Heavy_stuff_started');

  return `${interationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

  const { count, decrement, increment } = useCounter(4000);
  const { count: count2, decrement:decrement2, increment: increment2 } = useCounter(4000);


  const myHeavyValue = useMemo(() => heavyStuff(count), [count]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Memo - useMemo { myHeavyValue }</h1>
      <hr />

      <h4>Counter: { count }</h4>
      <h4>Counter: { count2 }</h4>

      <button className='bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer' onClick={increment}> +1 - counter1</button>
      <button className='bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer' onClick={decrement}> -1 - counter1</button>
      <button className='bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer' onClick={increment2}> +1 - counter2 </button>
      <button className='bg-blue-500 text-white px-2 py-2 rounded-md cursor-pointer' onClick={decrement2}> -1 - counter2</button>
    </div>
  )
}