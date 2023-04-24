import Feature from "../components/feature"
import Front from "../components/front"
import { Navbar } from "../components/navbar"
import "../pagess/home.css"
import Test from "./Test"

export const Home = () => {
    console.log("hii")
  return (
   <div className="home">
     <Navbar />
     <Front />
     <Feature />
 
   </div>
  )
}
