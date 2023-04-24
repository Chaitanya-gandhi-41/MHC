
import {  Button, Input } from "antd"
import "./front.scss";
import image1 from "../images2/image1.png"
import Avtar from "../function/avtar";

const Front = () => {
  return (
    <div className="front" id="about">
      <div className="right">
        <h1>Your  Mental Health <br />
        Companion</h1>
        <p>A website that helps you take care of your mental health. 
          You can take questionnaires to get personalized feedback, 
          join a supportive community of people who understand you, 
          and access resources and tips to cope with your challenges. 
          Mental Health Matters is your online ally in your journey towards well-being. 
          <br />
         <br />
        Don’t wait, sign up today and start feeling better.</p>
      
      <div className="inpu">
      <Input type="email"
        size='small'
        placeholder="Enter Email"
        style={{height:"40px",width:"250px",border:"2px black solid"}}
        className="ant"
       
       />
       <Button type="primary" style={{height:"40px",marginLeft:"5px"}}>Get Started</Button>
   
      </div>
      <Avtar style={{height:"30px"}} />
      </div>
      <img src={image1} />
    </div>
  )
}

export default Front