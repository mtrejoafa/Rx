import { useState } from "react";

export const useCounter = (initialValue:number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const handlerAdd = () => {
        setCounter(counter+1);
    }

    const handlerSubstract = () => {
        if (counter > 0)
         setCounter((prevState) => prevState - 1);
    }

    const handlerReset = () => {
        setCounter(0);
    }
  return {
    counter,
    handlerAdd,
    handlerSubstract,
    handlerReset
  }
}
