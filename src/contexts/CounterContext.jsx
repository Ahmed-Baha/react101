import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  counter: 0,
  incrementHandler: () => {},
  decrementHandler: () => {},
});

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = (step) => {
    setCounter((pre) => pre + step);
  };

  const decrementHandler = (step) => {
    setCounter((pre) => pre - step);
  };

  return (
    <CounterContext.Provider
      value={{ counter, incrementHandler, decrementHandler }}
    >
      {children}
    </CounterContext.Provider>
  );
};


// import {createContext,useContext,useState } from "react";

// const CounterContext=createContext({
//     counter:0,
//     incrementHandler:()=>{},
//     decrementHandler:()=>{},
// })

// export const useCounter=()=>useContext(CounterContext);

// export const CounterProvider=({Children})=>{
//     const [counter,setCounter]=useState(0);
//     const incrementHandler=(step)=>{
// setCounter((pre)=>pre+step)
//     }
//     const decrementHandler=(step)=>{
// setCounter((pre)=>pre-step)
//     }
//     return(
// <CounterContext.Provider value={{counter,incrementHandler,decrementHandler}}>
//     {Children}
// </CounterContext.Provider>
// )}

