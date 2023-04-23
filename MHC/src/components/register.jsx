import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'



export const Register = () => {
  return (
    <Space direction='vertical' size={20} style={{width:"90%",marginLeft:"30px"}}>
       
    <Input
     placeholder='Email'
     type='Email' 
      allowClear
      size='large'
     style={{height:"50px"}}
 ></Input>
 <Input.Password
     placeholder="Enter password"
     style={{height:"50px"}}
     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
   />
   <Input.Password
     placeholder="Confirm password"
     style={{height:"50px"}}
     iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
   />
  <Button  type="primary"  style={{marginBottom:"20px",height:"40px"}} block>Signup</Button>

  </Space>
  )
}
