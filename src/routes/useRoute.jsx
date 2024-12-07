import Home from "../pages/Home"
import { About } from "../pages/About"
import Error from "../pages/Error"
import Todo from "../pages/Todo"
export default function UseRoute(){
    return{
        Home:{path:"/",element:<Home/>},
        About:{path:"/About",element:<About/>},
        Error:{path:"*",element:<Error/>},
        Todo:{path:"/Todo",element:<Todo/>},
    }
}