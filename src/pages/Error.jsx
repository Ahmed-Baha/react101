import { useCounter } from "../contexts/CounterContext__2"
import Mainlayout from "../layouts/Mainlayout"
export default function Error(){
    const {Counter}=useCounter()
    return(
        <Mainlayout>
        <div><h1>errror 404...</h1>
        <h1>{Counter}</h1>
        </div>
        </Mainlayout>
    )
}