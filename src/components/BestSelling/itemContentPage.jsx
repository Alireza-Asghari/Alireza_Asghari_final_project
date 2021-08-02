import React,{useEffect} from 'react';
import Header from '../HomePage.header/header';
import {useParams} from 'react-router-dom'
import {BestSellingFakeData} from './BestSellingFakeData'
import axios from 'axios';
import {Navbar,Nav,Container} from 'react-bootstrap'



const ItemContentPage = (props) => {

   const {id} = useParams()
   const item = BestSellingFakeData.find(el=>el.id==id)
   const [data,setData] = React.useState(null)
   


useEffect(() => {
  axios
  .get("http://localhost:1337/categories")
  .then(res=>{
     let getCategory = res.data.find(el=>el.title=='best-selling')
     setData(getCategory.books.find(el=>el.id==id))      
    }
    
    )
    .catch(err=>console.log(err))
    
}, [])


    return (
        <>
            <Header />
            <div className='main-container mx-auto'>
                <div className=' d-flex justify-content-start h-75 row'>
                    <div className='ItemPicture d-flex justify-content-center justify-content-sm-center col-12 col-sm-5 col-md-4'>
                        <img src={data && `http://localhost:1337${data.image.url}`} alt="#" className='as' />
                    </div>
                    <div className='d-flex justify-content-start ww pt-4 flex-column justify-content-around align-items-center align-items-sm-start col-12 col-sm-5 col-md-4'>
                        <div className='book-name'>
                          
                         {
                             data && `${data.title}`
                         }
                          <hr/>
                        </div>
                        <div className='old-price'>
                            {
                                data && `قیمت اصلی :   ${data.oldPrice} تومان`
                            }
                        </div>
                        <div className='new-price'>
                           {
                                data && `قیمت با تخفیف :  ${data.newPrice} تومان`
                           }
                        </div>
                        <div className='product-code'>
                            کد محصول : 159875498
                        </div>
                        <div>
                            <button className='basket-but'>افزودن به سبد</button>
                        </div>
                        
                    </div>
                </div>



            </div>

        </>
    )
}

export default ItemContentPage;
