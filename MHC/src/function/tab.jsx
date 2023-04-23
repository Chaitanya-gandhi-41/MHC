import { Tabs } from 'antd'
import { Login } from '../components/login'
import { Register } from '../components/register'
import "./tab.css"
export const Tabsab = () => {
  return (
   
   <Tabs centered moreIcon size='large' tabBarStyle={{fontFamily:"sans-serif"}} colorFillAlter >
    <Tabs.TabPane tab="Login" key="login" className='hlo' ><Login /></Tabs.TabPane>
    <Tabs.TabPane tab="Signup" key="Signup"><Register /></Tabs.TabPane>
   </Tabs>
   
  )
}
