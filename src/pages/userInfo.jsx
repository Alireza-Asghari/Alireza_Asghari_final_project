import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import Header from '../components/HomePage.header/header'


const UserInfo = () => {
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
                                <div className='p-3'>
                                    <button className='p-2 px-5 btn btn-primary entre-but w-75'>ورود</button>
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
                                    <button className='p-2 px-5 btn btn-success entre-but w-75'>ثبت نام</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserInfo
