import { Tabs } from 'antd'


export const Tabsab = () => {
  return (
    <div className="Tabs">
   <Tabs centered>
    <Tabs.TabPane tab="Login" key="login"></Tabs.TabPane>
    <Tabs.TabPane tab="Signup" key="Signup"></Tabs.TabPane>
   </Tabs>
   </div>
  )
}
