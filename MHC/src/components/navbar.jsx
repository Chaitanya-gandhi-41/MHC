import { Button } from 'antd';
import  "../components/navbaar.css"
import {LoginOutlined } from "@ant-design/icons";
import { useState } from 'react';
import Mode from '../function/modal';
import { Link } from 'react-scroll';
import logo from "../images2/logo.png"
import Contact from '../pagess/Contact';


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [opened,setopened]=useState(false);
  return (
   <div className="navbar">
<img src={logo} />
    <ul className='list'>
  
      <li><Link

  to="about"
  spy={true}
  smooth={true}
  offset={20}
  duration={500}
>AboutUs</Link></li>
      <li><Link

to="features"
spy={true}
smooth={true}
offset={50}
duration={500}
>Features</Link></li>
      <li>WorkWithus </li>
      <li>  <Link

to="tests"
spy={true}
smooth={true}
offset={70}
duration={700}
> Tests</Link></li>
      <li>Blog</li>
      <li>  <Link

to="price"
spy={true}
smooth={true}
offset={20}
duration={500}
> Pricing</Link></li>
      <li onClick={()=>  setopened(true)}>Contactus</li>
      <Contact open={opened} setOpen={setopened}/>
    </ul>
    <Button type="primary" onClick={()=>  setOpen(true)}><LoginOutlined />Signin</Button>
    <Mode open={open} setOpen={setOpen} />

   </div>
  )
}
