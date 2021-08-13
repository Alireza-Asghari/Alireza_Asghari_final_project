import React from 'react';
import axios from 'axios';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function ViewModalLog(props) {
const [userName, setUserName] = React.useState('')
const [password, setPassword] = React.useState('')
const [email, setEmail] = React.useState('')

  const handleUserNameValue=(e)=>{
    setUserName(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  

const handleLog=()=>{
  
  axios
  .post('http://localhost:1337/auth/local', {
    identifier: `${userName}`,
    password: `${password}`,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    alert('شما وارد حساب کاربری خود شدید')
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
  

}

      return (
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
          

        </Modal.Body>
        <Modal.Footer className='p-3'>
          <div className='text-center'>
          <Button className='text-center' onClick={handleLog}>ورود </Button>
          </div>
        </Modal.Footer>
      </Modal>
      );
    }
    export default ViewModalLog;