import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import Header from '../components/HomePage.header/header'
import ViewModal from './modal'
import ViewModalLog from './modal.log'


const UserInfo = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [register, setRegister] = React.useState(false);
    const [login, setLogin] = React.useState(false);

const handleRegisterModal=()=>{
    setModalShow(true)
    setRegister(true)
}
const handleLogInModal=()=>{
    setModalShow(true)
    setLogin(true)
}    

    return (
        <>
        <Header/>
            <div className='main-box-userInfo '>
                <div className='row h-100 '>
                    <div className='col-12 col-md-6 text-center P-2 log-in'>
                        <div className="log-in-box">
                            <div className='log-in-content d-flex flex-column'>
                                <div className=' p-3'>
                                    <FaSignInAlt color='grey' size="50px"/>
                                </div>
                                <div className='p-3 entre-text'>
                                    عضو سایت هستید؟
                                </div>
                                <div className='p-3 text-confirmation'>
                                    برای تکمیل فرآیند خرید خود وارد شوید.
                                </div>
                                <div className='p-3 text-center'>
                                    <button className='p-2 px-2  btn-primary entre-but w-75' onClick={handleLogInModal}>ورود</button>
                                </div>

                            </div>
                        </div>
                    </div>
                 
                    <div className='col-12 col-md-6 text-center P-2 log-in'>
                        <div className="log-in-box">
                            <div className='log-in-content d-flex flex-column'>
                                <div className=' p-3'>
                                    <FaUserPlus color="grey" size="50px"/>
                                </div>
                                <div className='p-3 entre-text'>
                                    ثبت نام
                                </div>
                                <div className='p-3 text-confirmation'>
                                    برای تکمیل فرآیند خرید خود ثبت نام شوید.
                                </div>
                                <div className='p-3'>
                                    <button className='p-2 px-5  btn-success entre-but w-75' onClick={handleRegisterModal}>ثبت نام</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

     {
         register &&
         <ViewModal
        show={modalShow}
        onHide={() => {
            setModalShow(false)
            setRegister(false)
        } }
        />
       
      }
       {
         login &&
         <ViewModalLog
        show={modalShow}
        onHide={() =>{ 
            setModalShow(false)
            setLogin(false)
        }}
        />
      }
        </>
    )
}

export default UserInfo
