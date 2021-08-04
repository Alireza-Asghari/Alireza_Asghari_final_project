import React from 'react'
import {useHistory} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import {IoIosArrowDown} from 'react-icons/io'

const Category = () => {

const history = useHistory();

    return (
        <>
             <div className="nav-bar">
           <div className='row '>
             <div className=' pr-3 py-1'>
               <Dropdown  >
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ fontSize: `16px`, color:'black',}}>
                     <span className="account-header">دسته بندی ها</span>
                     <IoIosArrowDown/>
                </Dropdown.Toggle>

                 <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=> history.push('/best-selling')} >پر فروش ترین ها</Dropdown.Item>
                     <Dropdown.Item onClick={()=> history.push('/new-title')}>عناوین جدید</Dropdown.Item>
                     <Dropdown.Item onClick={()=> history.push('/criminal')}>جنایی</Dropdown.Item>
                     <Dropdown.Item onClick={()=> history.push('/horror')}>ترسناک</Dropdown.Item>
                     <Dropdown.Item onClick={()=> history.push('/fiction')}>تخیلی</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>
            </div>
           </div> 


        </div>
        </>
    )
}

export default Category;
