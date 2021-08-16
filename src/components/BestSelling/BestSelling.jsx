import React, {useEffect,useState} from 'react'
import Header from '../HomePage.header/header'
import BestSellingItems from './BestSelling.items'
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';

const BestSelling = (props) => {
    const [items,setItems] = React.useState(null)
    const [loading,setLoading] = React.useState(true)

useEffect(() => {
    setLoading(true)
    axios
    .get("http://localhost:1337/categories")
    .then(res=>{
       let getCategoryData = res.data.find(el=>el.title=='best-selling')
       setItems(getCategoryData.books);  
       setLoading(false)
      }
      
      )
      .catch(err=>console.log(err))
}, [])

if (loading) return (<div><LoopCircleLoading/></div>)
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5' >پر فروش ترین ها</h3>

            <div className='main-product'>
                <div className='row h-25 row-product'>

                  {
                   items && items.map((item,index)=>{
                        return(
                            <>
                                <div key={index}>
                                   <BestSellingItems
                                      
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
