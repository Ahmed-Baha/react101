import { NavLink } from "react-router-dom"
import UseRoute from "../routes/useRoute"
export function Navbar(){
  const { Home , About,Todo }=UseRoute ()
    return(
        <div className="bg-red-800">
             <nav>
            <ul>
              <li> <NavLink to={Home.path}>Home</NavLink></li>
              <li> <NavLink to={About.path}>About</NavLink> </li>
              <li> <NavLink to={Todo.path}>Todo</NavLink> </li>
            </ul>
          </nav>
            
        </div>
    )
}