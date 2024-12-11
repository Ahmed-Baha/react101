// import { useTodos } from "../contexts/TodosContext"
import { Button, Input } from "@mantine/core";
import { useTodos } from "../contexts/TodosContext";

export default function TodoForm(){
    const {addTask,input ,setInput}=useTodos()
    return( 
        <div>
        <div className="">TodoForm</div>
        <div className="flex justify-center">
            <Input placeholder="Input component" value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button onClick={()=>addTask()}>add</Button>
            <Button>Clear</Button>
        </div>
        </div>
    )
}