import React,{useEffect} from 'react'
import BestSellingItems from '../BestSelling/BestSelling.items'
import NewTitleItems from '../NewTitle/NewTitle.items'
import axios from 'axios'
import { useSelector } from 'react-redux'

const MainProduct = () => {

  const [items,setItems] = React.useState(null)
  const [newTitleData,setnewTitleData] = React.useState(null)
  useEffect(() => {
      axios
      .get("http://localhost:1337/categories")
      .then(res=>{
         let getCategoryData = res.data.find(el=>el.title=='best-selling')
         let getNewTitleData = res.data.find(el=>el.title=='new-titles')
         setItems(getCategoryData.books);  
         setnewTitleData(getNewTitleData.books);  
        }
        
        )
        .catch(err=>console.log(err))
        console.log(items);
  }, [])

    return (
        <>
        
         <div className='main-product main-product-selling'>
              <div className='row h-100 row-product'>

              {
                   items && items.map((item,index)=>{
                        return(
                            <>
                                <div key={index}>
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
              
           <div className='new-title py-5 aa '>
               <div className='title d-flex yy'>
                 <span className='title-span'> عناوین جدید</span> 
                 <span className='sen'>کتاب هایی که به تازگی به چاپ رسیده اند </span> 
               </div>
            </div>


            <div className='main-product '>
              <div className='row h-75 row-product '>

              {
                   newTitleData && newTitleData.map((item,index)=>{
                        return(
                            <>
                                <div key={index}>
                                   <NewTitleItems
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

export default MainProduct
