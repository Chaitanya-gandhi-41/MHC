import { Tabs } from 'antd'

import { Register } from '../components/register'
import "./tab.css"
import { Login } from '../components/login'
export const Tabsab = () => {
  return (
   
   <Tabs centered moreIcon size='large' tabBarStyle={{fontFamily:"sans-serif"}} colorFillAlter >
    <Tabs.TabPane tab="Login" key="login" className='hlo' ><Login /></Tabs.TabPane>
    <Tabs.TabPane tab="Signup" key="Signup"><Register /></Tabs.TabPane>
   </Tabs>
   
  )
}
