import "@mantine/core/styles.css";
import { useRoutes } from "react-router-dom";
import { CounterProvider } from "./contexts/CounterContext__2";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { About } from "./pages/About";
function App() {
  const routeElements=useRoutes(
  [
    {
      path: "/", 
      element:<Home/>
    },
    {
      path: "/Todo", 
      element:<Todo/>
    },
    {
      path: "/About", 
      element:<About/>
    },
  ])
  
  return (
    <CounterProvider>
     
    
 
      {routeElements}
      
      
    </CounterProvider>
  );
}

export default App;
