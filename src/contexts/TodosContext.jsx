import { useState } from "react";
import { createContext, useContext } from "react";

const TodosContext = createContext();

export function useTodos() {
  return useContext(TodosContext);
}
export function TodosProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Sample Task", status: true },
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(false);

  function updateTaskStatus(id, newStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  }

  function addTask() {
    setTasks((prevTasks) => [
      { id: Date.now(), task:input, status: false },
      ...prevTasks,
    ]);
    console.log(tasks);
    // console.log(input);
    setInput("");
  }

  function removeTask() {}
  function updateTask() {}
  function removeAll() {}
  return (
    <TodosContext.Provider
      value={{
        tasks,
        addTask,
        removeAll,
        removeTask,
        updateTask,
        setInput,
        input,
        status,
        setStatus,
        updateTaskStatus,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
