import React from 'react';
import {CriminalFakeData} from './criminalFakeData';
import Header from '../HomePage.header/header';
import CriminalItems from './Criminal.items';

const Criminal = () => {
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5'>ژانر جنایی</h3>
            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                    CriminalFakeData.map((item,index)=>{
                        return(
                            <>
                                <div>
                                   <CriminalItems
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

export default Criminal;
