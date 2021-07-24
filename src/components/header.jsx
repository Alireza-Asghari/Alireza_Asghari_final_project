import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {Dropdown} from 'react-bootstrap'
import {IoIosArrowDown} from 'react-icons/io'

const Header = () => {
    return (
        <div className='header '>
           <div className='row w-100'>
            <div className='header-left col-6 '>
            <Dropdown >
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ fontSize: `13px`, color:'white',}}>
                     <span className="account-header">حساب کاربری</span>
                     <IoIosArrowDown/>
                </Dropdown.Toggle>

                 <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">ورود</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">ثبت نام</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>

            </div>
           

            <div className='header-right col-6'>
                <span><FaInstagram style={{color:'white'}} className='mx-2'/></span>
                <span><FaFacebookF style={{color:'white'}} className='mx-2'/></span>
                <span><FaTelegram style={{color:'white'}} className='mx-2'/></span>
                <span><FaTwitter style={{color:'white'}} className='mx-2'/></span>
            </div>
          </div>  
        </div>
    )
}

export default Header
