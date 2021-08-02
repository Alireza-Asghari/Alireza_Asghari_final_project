import React from 'react'
import BestSellingItems from '../BestSelling/BestSelling.items'
import NewTitleItems from '../NewTitle/NewTitle.items'
import {BestSellingFakeData} from '../BestSelling/BestSellingFakeData'
import  {NewTitleFakeData} from '../NewTitle/NewTitleFakeData.jsx'

const MainProduct = () => {
    return (
        <>

        
         <div className='main-product'>
              <div className='row h-100 row-product'>

                  {
                    BestSellingFakeData.map((item,index)=>{
                      return(
                        <>
                             <BestSellingItems
                              key={index}
                             item={item}
                             />
                        </>
                     )
                    })
                  }
          
                </div> 
            </div>
              
           <div className='new-title py-5 aa '>
               <div className='title d-flex yy'>
                 <span className='title-span'> عناوین جدید</span> 
                 <span className='sen'>کتاب هایی که به تازگی به چاپ رسیده اند </span> 
               </div>
            </div>
          <NewTitleItems/>
         
        </>
    )
}

export default MainProduct
