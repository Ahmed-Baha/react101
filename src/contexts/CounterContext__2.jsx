import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [Counter, setCounter] = useState(0);

  const incrementHandler = () => setCounter(prev => prev + 1);
  const decrementHandler = () => setCounter(prev => prev - 1);

  return (
    <CounterContext.Provider value={{ Counter, incrementHandler, decrementHandler }}>
      {children}
    </CounterContext.Provider>
  );
}
