/*import React,{useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
const LoginPage = () => {

    const [user,setUser] = React.useState('');
    const [pass,setPass] = React.useState('');
    const [click,setClick] = React.useState(false);
    const history = useHistory()

    const handleUserName=(e)=>{
        setUser(e.target.value)
    }
    const handlePass=(e)=>{
        setPass(e.target.value)
    }
   

useEffect(() => {
    axios
    .post('http://localhost:1337/auth/local', {
      "identifier": `${user}`,
      "password":`${pass}`,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      history.push(`/login/${response.data.user.username}-purchase-basket`)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    }); 
    
}, [click])

    return (
       <>
            <input placeholder='username' onChange={handleUserName}/>
            <br/>
            <br/>
            <br/>
            <input placeholder='password' onChange={handlePass  }/>
            <br/>
            <br/>
            <br/>
            <button onClick={()=> setClick(!click)}>submit</button>

       </>
    )
}

export default LoginPage;
*/