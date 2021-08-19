import React from 'react';
import axios from 'axios';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoopCircleLoading } from 'react-loadingg';

const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

const validUserName = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

function ViewModal(props) {
  
const [userName, setUserName] = React.useState('')
const [password, setPassword] = React.useState('')
const [emailErr, setEmailErr] = React.useState(false);
const [userNameErr, setUserNameErr] = React.useState(false);
const [pwdError, setPwdError] = React.useState(false);
const [email, setEmail] = React.useState('');


  const handleUserNameValue=(e)=>{
    setUserName(e.target.value)
    if (!validPassword.test(userName)) {
      setUserNameErr(true);
    }
     else{
      setUserNameErr(false)
     }
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
    if (!validPassword.test(password)) {
      setPwdError(true);
     }
     else{
      setPwdError(false)
     }
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    if (!validEmail.test(email)) {
      setEmailErr(true);
     }
     else{
      setEmailErr(false)
     }
  }

const handleRegister=()=>{
  
  if(userName =='' && password =='' && email ==''){
    setEmailErr(true)
    setPwdError(true)
    setUserNameErr(true) 
  }
  /*else if(userName==''){
    setUserNameErr(true)  
    
  }*/
  /*else if(password==''){
    setPwdError(true)
  }
  else if(email==''){
    setEmailErr(true)
  }*/
  else if (userName=='' && password==''){
    setPwdError(true)
    setUserNameErr(true) 
  }
  else if (userName=='' && email==''){
    setEmailErr(true)
    setUserNameErr(true) 
  }
  else if (password=='' && email==''){
    setPwdError(true)
    setEmailErr(true) 
  }
   else{ 
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
   /* console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);*/
    
  })
  .catch(error => {
    // Handle error.
    /*alert('نام کاربری یا رمز عبور قبلا انتخاب شده است');*/
    toast.error("نام کاربری یا رمز عبور قبلا انتخاب شده است");
    
  });
   }
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
          <div className='p-2 d-flex flex-column align-items-center'>
            <input className='p-2 rounded ' placeholder='نام کاربری' onChange={handleUserNameValue}/>
            {userNameErr && <small className='text-danger'>نام کاربری معتبر نیست</small>}
          </div>

          <div className='p-2 d-flex flex-column align-items-center'>
            <input className='p-2 rounded ' placeholder='رمز عبور' onChange={handlePassword}/>
            {pwdError && <small className='text-danger'> رمز عبور معتبر نیست </small>}
          </div>
          <div className='p-2 d-flex flex-column align-items-center'>
            <input className='p-2 rounded' placeholder='ایمیل' onChange={handleEmail}/>
            {emailErr && <small className='text-danger'> ایمیل معتبر نیست </small>}
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