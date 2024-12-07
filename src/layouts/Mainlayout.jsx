import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
export default function ({children}){
return(
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
)
}