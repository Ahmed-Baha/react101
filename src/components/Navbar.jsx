import { NavLink } from "react-router-dom"
 export function Navbar(){
    return(
        <div className="bg-red-800">
             <nav>
            <ul>
              <li> <NavLink to="/">Home</NavLink></li>
              <li> <NavLink to="/About">About</NavLink> </li>
              <li> <NavLink to="/Todo">Todo</NavLink> </li>
            </ul>
          </nav>
            
        </div>
    )
}