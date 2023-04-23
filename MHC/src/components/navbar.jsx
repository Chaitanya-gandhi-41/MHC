import { Button } from 'antd';
import "../components/navbaar.css"
import {LoginOutlined } from "@ant-design/icons";
import { useState } from 'react';
import Mode from '../function/modal';
import { Link } from 'react-scroll';



export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
   <div className="navbar">
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
      <li>Blog</li>
      <li>Pricing</li>
      <li>Contactus</li>
    </ul>
    <Button type="primary" onClick={()=>  setOpen(true)}><LoginOutlined />Signin</Button>
    <Mode open={open} setOpen={setOpen} />

   </div>
  )
}
