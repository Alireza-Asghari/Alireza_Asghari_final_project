import React from 'react'
import {NewTitleFakeData} from './NewTitleFakeData.jsx';
import NewTitleCategory from './NewTitle.category';
import Header from '../HomePage.header/header';

const NewTitle = () => {
    return (
        <>
        <Header/>
        <h3 className='d-flex pt-4 pr-5'>عناوین جدید </h3>
        <div className='main-product'>
            <div className='row h-100 row-product'>

              {
                NewTitleFakeData.map((item,index)=>{
                    return(
                        <>
                            <div>
                               <NewTitleCategory
                                   key={index}
                                   item={item}
                               />
                            </div>
                                
                        </>
                 )
                })
              }
      
            </div> 
        </div>
    </>
    )
}

export default NewTitle;
