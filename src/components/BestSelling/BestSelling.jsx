import React from 'react'
import Header from '../HomePage.header/header'
import BestSellingItems from './BestSelling.items'
import {BestSellingFakeData} from './BestSellingFakeData'
import ItemContentPage from './itemContentPage'
import {useHistory} from 'react-router-dom'

const BestSelling = () => {

    const history = useHistory();
   

    const enterSinglePage = (itemData)=>{  

        <ItemContentPage ali={itemData}/>   
        console.log(itemData)
        singlePageConcept(itemData)          
    }
    
    const singlePageConcept =(itemData)=>{
        history.push('/Bestselling/Itemcontentpage')
        console.log(itemData);
}

  
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5'>پر فروش ترین ها</h3>

            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                    BestSellingFakeData.map((item,index)=>{
                        return(
                            <>
                                <div onClick={()=>enterSinglePage(item)}>
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
