import { Button } from 'antd';
import "../components/navbaar.css"
import {LoginOutlined } from "@ant-design/icons";
import { useState } from 'react';
import Mode from '../function/modal';


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
   <div className="navbar">
    <ul className='list'>
      <li>Home</li>
      <li>About</li>
      <li>What is MHC?</li>
      <li>WorkWithus </li>
      <li>Blog</li>
      <li>Pricing</li>
      <li>Contactus</li>
    </ul>
    <Button type="primary" onClick={()=>  setOpen(true)}><LoginOutlined />Login</Button>
    <Mode open={open} setOpen={setOpen} />

   </div>
  )
}
