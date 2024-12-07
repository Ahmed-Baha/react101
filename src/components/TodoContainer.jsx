import { useState } from "react";
import TodoSingle from "./TodoSingle";
import { useTodos } from "../contexts/TodosContext";

export default function TodoContainer(){

    const {updateTaskStatus,tasks}=useTodos()
    return(
        <div className="bg-sky-700 h-[80px]">
             <div>
            container
            </div>
            {tasks.map((task) => ( 
                
            <TodoSingle title={task.task} status={task.status} setStatus={(newStatus) => updateTaskStatus(task.id, newStatus)}/>
            ))}
             {/* {tasks.map((task) => (
        <TodoSingle
          key={task.id}
          title={task.task}
          status={task.state} // Accessing the `state` field for the task's status
          setStatus={(newStatus) => updateTaskStatus(task.id, newStatus)} // Updating status dynamically
        />
      ))} */}

        </div>
    )
}