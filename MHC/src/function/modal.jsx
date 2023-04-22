
import { Modal } from 'antd';
import { useState } from 'react';
import { Tabsab } from './tab';
const Mode= ({open,setOpen}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
 
  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
    
      <Modal
      
        open={open}
        onOk={handleOk}
        footer={null}
        confirmLoading={confirmLoading}
         onCancel={handleCancel}
        centered
      >
        <Tabsab />
      </Modal>
    </>
  );
};
export default Mode;