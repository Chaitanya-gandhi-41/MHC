import Pricing from "../components/Pricing"
import Feature from "../components/feature"
import Front from "../components/front"
import { Navbar } from "../components/navbar"
import "../pagess/home.css"


export const Home = () => {
    console.log("hii")
  return (
   <div className="home">
     <Navbar />
     <Front />
     <Feature />
 <Pricing/>
   </div>
  )
}
