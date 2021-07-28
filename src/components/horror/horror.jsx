import React from 'react';
import {HorrorFakeData} from './HorrorFakeData';
import Header from '../HomePage.header/header';
import HorrorItems from './HorrorItems';


const Horror = () => {
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5'>ژانر ترسناک</h3>
            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                    HorrorFakeData.map((item,index)=>{
                        return(
                            <>
                                <div>
                                   <HorrorItems
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

export default Horror;
