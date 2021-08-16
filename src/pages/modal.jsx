import React from 'react';
import axios from 'axios';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewModal(props) {
const [userName, setUserName] = React.useState('')
const [password, setPassword] = React.useState('')
const [email, setEmail] = React.useState('')

  const handleUserNameValue=(e)=>{
    setUserName(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

const handleRegister=()=>{
  console.log(email);
  axios
  .post('http://localhost:1337/auth/local/register', {
    email: `${email}`,
    username: `${userName}`,
    password: `${password}`,
  })
  .then(response => {
    // Handle success.
  /*  alert('ثبت نام با موفقیت انجام شد')*/
  toast.success("حساب کاربری شما با موفقیت ساخته شد");
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    /*alert('نام کاربری یا رمز عبور قبلا انتخاب شده است');*/
    toast.error("نام کاربری یا رمز عبور قبلا انتخاب شده است");
    
  });
  

}

      return (
       <> 
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-2'>
            <input className='p-2 rounded ' placeholder='نام کاربری' onChange={handleUserNameValue}/>
          </div>

          <div className='p-2'>
            <input className='p-2 rounded' placeholder='رمز عبور' onChange={handlePassword}/>
          </div>
          <div className='p-2'>
            <input className='p-2 rounded' placeholder='ایمیل' onChange={handleEmail}/>
          </div>

        </Modal.Body>
        <Modal.Footer className='p-3'>
          <div className='text-center'>
          <Button className='text-center' onClick={handleRegister }>ثبت نام</Button>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />    
      </>
      );
    }
    export default ViewModal;