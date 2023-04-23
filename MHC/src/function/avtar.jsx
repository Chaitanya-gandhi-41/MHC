import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
const Avtar = () => (
    <>
    
     
      
      <Avatar.Group
        maxCount={5}
        maxPopoverTrigger="click"
        size="large"
        maxStyle={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          cursor: 'pointer',
        }}
      >
        <Avatar
        style={{
          backgroundColor: "blue",
        }}
      >
        U
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        A
      </Avatar>
          <Avatar
        style={{
          backgroundColor: "yellow",
        }}
        icon={<AntDesignOutlined />}
      />
          <Avatar
        style={{
          backgroundColor: "greenyellow",
        }}
      >
        A
      </Avatar>
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
          <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
          <Avatar
        style={{
          backgroundColor: '#1890ff',
        }}
        icon={<AntDesignOutlined />}
      />
      </Avatar.Group>
    </>
  );
  export default Avtar;