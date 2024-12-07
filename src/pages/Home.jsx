import {Button } from "@mantine/core"
import Mainlayout from "../layouts/Mainlayout"
import { useCounter } from "../contexts/CounterContext__2"
export default function Home(){
  const {Counter,incrementHandler,decrementHandler}=useCounter()
    return(
      <Mainlayout>
        <>
        <h1>home</h1>
          <Button fullWidth onClick={incrementHandler}>Full width {Counter}</Button>
          <Button fullWidth onClick={decrementHandler}>Full width {Counter}</Button>
        </>
        </Mainlayout>
    )
}