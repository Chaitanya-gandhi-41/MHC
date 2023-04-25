import { Button, Modal ,Input} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
const Contact = ({open,setOpen}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
 
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
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
        title="Any Query"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
       <Input type="email" placeholder="xx@gmail.com" />
       <TextArea placeholder='write here' style={{marginTop:"10px"}}/>
       <Button type='primary' style={{marginTop:"10px"}} block >Send</Button>
             </Modal>
    </>
  );
};
export default Contact