
import React,{useEffect} from 'react';
import {useParams,useHistory } from 'react-router';
import BasketComponent from './basker.component';
import { useSelector,useDispatch } from 'react-redux';

const Basket = () => {
    const [box,setBox] = React.useState([])
    const [basketStatus,setBasketStatus] = React.useState(false)
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    
    return (
      <>
    {
    cart.cart.map(el=>{
      return(
        <BasketComponent data={el}/>
       
      )
    })
    }


    
    { cart.cart.length !==0 &&
    <>
    <div className='mt-5 mb-4 total-price'>
      قیمت کل : 
    </div>
    <button className='mt-2 btn btn-success mb-4' type="button" onClick={()=> history.push('/best-selling/basket/user-info')}>
     تکمیل خرید
     </button>
     </>
     }

    {
       cart.cart.length ==0 &&
     <>  
       <div className='d-none mx-auto header-top d-md-block justify-content-md-center align-items-md-center'>
       <ul className='row  p-3' >
           <li className='col-md-4 text-center'>شرح محصول</li>
           <li className='col-md-3 text-center'>تعداد</li>
           <li className='col-md-3 text-center'>قابل پرداخت (تومان)</li>
           <li className='col-md-2 text-center'>حذف</li>
       </ul>
       
       <div className='text-danger text-center w-100'>
          موردی یافت نشد !
       </div> 
   </div>
  
   </> 

    }
      </>
    )
}
export default Basket;
