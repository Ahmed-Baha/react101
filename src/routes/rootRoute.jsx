import { Route } from "react-router"
import Todo from "../pages/Todo"
export default function rootRoute(RouterBuilder){
    const {Home,About,Error,Todo}=RouterBuilder
    return(

        <>
        <Route {...Home}/>
        <Route {...About}/>
        <Route {...Error}/>
        <Route {...Todo}/>
        </>
    )
}