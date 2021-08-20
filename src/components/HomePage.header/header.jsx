import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {Dropdown} from 'react-bootstrap'
import {IoIosArrowDown} from 'react-icons/io'
import {FiShoppingCart} from 'react-icons/fi'
import { useHistory } from 'react-router';
import Category from '../category'


const Header = () => {
  const history = useHistory()
    return (
    <>
        <div className='header '>
           <div className='row w-100' >
            <div className='header-left col-6 '>
            <Dropdown >
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ fontSize: `13px`, color:'white',}}>
                     <span className="account-header">حساب کاربری</span>
                     <IoIosArrowDown/>
                </Dropdown.Toggle>

                 <Dropdown.Menu>
                     <Dropdown.Item onClick={ ()=> history.push('/best-selling/basket/user-info')}>ورود</Dropdown.Item>
                     <Dropdown.Item onClick={ ()=> history.push('/best-selling/basket/user-info')}>ثبت نام</Dropdown.Item>
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

        <div className='row'>
           <div className='px-4 col-12 col-md-4'>
              <div className='logo py-3 d-flex justify-content-center justify-content-md-start'>
                <img src="https://jangal.com/uploads/siteinfo/Home-page-logo_3_2.png" alt='جنگل' style={{height:'70px', width:'70px'}} />
              </div> 
            </div>  

           <div className=' px-2 col-12 col-md-2'>
                <div className='py-4  d-flex justify-content-center justify-content-md-center'>
                    <button className='btn btn-danger px-3'>
                        <span className='ml-3' onClick={() => history.push(`/best-selling/:id/basket`)}>سبد خرید</span>
                        <FiShoppingCart />
                    </button>
                </div>
           </div> 

          <div className='col-12 col-md-6 px-5 '>
            <div className=' py-4 d-flex justify-content-center justify-content-md-end '>
               <input className='search p-2 w-100' type='text' placeholder='عبارت مورد جستجو'></input> 
               
            </div>  
          </div> 

        </div>
        <hr />

      <Category/>      
      </>
    )
}

export default Header
