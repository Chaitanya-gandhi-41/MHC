import { Input, Space,Button } from 'antd'

import { EyeTwoTone,EyeInvisibleOutlined } from '@ant-design/icons';

import GoogleButton from 'react-google-button'
export const Login = () => {
    
  return (
   <Space direction='vertical' size={20} style={{width:"90%",marginLeft:"30px"}}>
       
       <Input
        placeholder='email'
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
     <Button  type="primary" block style={{height:"40px"}}>Login</Button>
   <span style={{marginLeft:"200px",fontWeight:"600"}}>0R</span>
   <GoogleButton
    
  onClick={() => { console.log('Google button clicked') }}
  style={{width:"100%",marginBottom:"20px"}}
   className='google'
/>
     </Space>
  )
}
