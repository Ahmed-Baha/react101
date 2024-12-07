import Mainlayout from "../layouts/Mainlayout"
import TodoHeader from "../components/TodoHeader"
import TodoContainer from "../components/TodoContainer"
import TodoForm from "../components/TodoForm"
import { TodosProvider } from "../contexts/TodosContext"
export default function Todo(){
    return (
        <Mainlayout>
            <TodosProvider>
        <div>hey from todo
            <TodoHeader/>
        <TodoContainer/>
        <TodoForm/>
        </div>
        </TodosProvider>
        </Mainlayout>
    ) 
}