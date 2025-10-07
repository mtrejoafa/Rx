import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {

    const {counter,handlerAdd,handlerSubstract,handlerReset} = useCounter(2);

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Counter: {counter}</h1>

        <div style={{display:"flex", gap:10}}>
            <button onClick={handlerAdd}>+1</button>
            <button onClick={handlerSubstract}>-1</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
    </div>
  )
}
