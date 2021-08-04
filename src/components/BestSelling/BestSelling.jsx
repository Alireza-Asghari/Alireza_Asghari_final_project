import React, {useEffect,useState} from 'react'
import Header from '../HomePage.header/header'
import BestSellingItems from './BestSelling.items'
import {BestSellingFakeData} from './BestSellingFakeData'
import axios from 'axios'


const BestSelling = (props) => {
    const [items,setItems] = React.useState(null)

useEffect(() => {
    axios
    .get("http://localhost:1337/categories")
    .then(res=>{
       let getCategoryData = res.data.find(el=>el.title=='best-selling')
       setItems(getCategoryData.books);  
      }
      
      )
      .catch(err=>console.log(err))
}, [])

    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5' >پر فروش ترین ها</h3>

            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                   items && items.map((item,index)=>{
                        return(
                            <>
                                <div>
                                   <BestSellingItems
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

export default BestSelling;
