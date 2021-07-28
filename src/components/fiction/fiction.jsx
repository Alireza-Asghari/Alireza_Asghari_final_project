import React from 'react';
import {FictionFakeData} from './FictionFakeData';
import FictionItems from './FictionItems'
import Header from '../HomePage.header/header';

const Fiction = () => {
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5'>ژانر تخیلی</h3>
            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                    FictionFakeData.map((item,index)=>{
                        return(
                            <>
                                <div>
                                   <FictionItems
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

export default Fiction
