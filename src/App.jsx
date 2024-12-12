import "@mantine/core/styles.css";
import { useRoutes } from "react-router-dom";
import { CounterProvider } from "./contexts/CounterContext__2";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import { About } from "./pages/About";
import Blogs from "./pages/Blogs";
import DynamicBlog from "./pages/DynamicBlog";
import Error from "./pages/Error";
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
    {
      path: "/Blogs", 
     children:[
        {
          index:true,
          
          element:<Blogs title="all blogs"/>,
        },
        {
          path:":blogId/:blogComment?",
          element:<DynamicBlog title="dynamic blogs"/>,
        },
        {
          path:"new",
          element:<Blogs title="new blogs"/>,
        },
        {
          path:"add",
          element:<Blogs title="add blogs"/>,
        }
      ]

    },
    // {
    //   path: "/Blogs/new", 
    //   element:<Blogs/>
    // },
    // {
    //   path: "/Blogs/add", 
    //   element:<Blogs/>
    // },
    {
      path:"*",
      element:<Error/>
    },
  ])
  
  return (
    <CounterProvider>
     
    
 
      {routeElements}
      
      
    </CounterProvider>
  );
}

export default App;
