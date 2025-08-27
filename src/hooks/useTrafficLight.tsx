import { useEffect, useState } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
} 

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState<number>(5);
  
  
    useEffect(() => {
      console.log({ countDown });
  
      if(countDown === 0) return;
  
      const intervalId = setInterval(() => {
        setCountDown(prev => prev - 1);
      }, 1000)
  
      return () => {
        clearInterval(intervalId);
      }
    }, [countDown, light]);
  
    // Change light color effect
  
    useEffect(() => {
  
      if(countDown > 0) return;
  
      if(countDown === 0) {
        setCountDown(5);
  
        if( light === 'red' ){
          setLight('green');
          return;
        }
  
        if( light === 'yellow' ){
          setLight('red');
          return;
        }
  
        if( light === 'green' ){
          setLight('yellow');
          return;
        }
  
      }
    },[countDown, light]);

    return {
      // Props
      light,
      countDown,
      colors,

      // Computed
      porcentage: (countDown / 5) * 100,
      greenLight: light === 'green' ? colors.green : 'bg-gray-500',
      redLight: light === 'red' ? colors.red : 'bg-gray-500',
      yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',

      // Method

    }

}
