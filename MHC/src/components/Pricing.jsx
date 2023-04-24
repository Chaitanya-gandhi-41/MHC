import {Button, Card} from "antd"
import guard from "../images2/icon1.png";
import "../components/pricing.scss";
import { CheckCircleOutlined } from '@ant-design/icons';
import mage from "../images2/mage.png"
import spani from "../images2/span.png"
const Pricing = () => {
  return (
   <div className="card" id="price">
     <Card className="hy" cover={<div className="hlo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<h1>Guardian</h1>

        </div>}>
          <div className="center">
            <p>What You’ll Get</p><ul>
     <li><CheckCircleOutlined style={{marginRight:"5px"}} />Access To resources and Psychometric Tests </li>
      <li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Understanding your mental illness</li>
</ul>
          </div>
         
<div style={{marginTop:"107px"}}>
          <h1>Free Forever</h1>
          <Button type="primary" style={{backgroundColor:"#FF1D89",height:"40px"}} block>Subscribe</Button>
      </div>
        </Card>
        <Card className="hy" cover={<div className="hlo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<h1>Mage</h1>

        </div>}>
          <div className="center">
            <p>What You’ll Get</p><ul>
            
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>10 Sessions With a certified Therapist</li>

<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Chat with community</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Dashboard</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Advanced analytics</li>
</ul>
          </div>
          <div className="ki" style={{marginTop:"60px"}}> <h1>Rs.1100</h1>
          <Button type="primary" style={{backgroundColor:"#FF1D89",height:"40px"}} block>Subscribe</Button></div>
          
         
        </Card>
        <Card className="hy" cover={<div className="hlo" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<h1>Phantom</h1>

        </div>}>
          <div className="center">
            <p>What You’ll Get</p><ul>
           
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>15 Sessions with Certified Therapists</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Community Support</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>24/7 support</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Advanced analytics</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Access to upcoming features</li>
<li><CheckCircleOutlined  style={{marginRight:"5px"}}/>Paid Blog</li>
</ul>
          </div>
          <h1>Rs. 2200</h1>
          <Button type="primary" style={{backgroundColor:"#FF1D89",height:"40px",marginBottom:"30px"}} block>Subscribe</Button>
        </Card>
   </div>
       
       
  )
}

export default Pricing