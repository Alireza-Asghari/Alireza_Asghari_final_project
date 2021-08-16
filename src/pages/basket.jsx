
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
    
    <button className='mt-2 btn btn-success mb-4' type="button" onClick={()=> history.push('/best-selling/basket/user-info')}>
     تکمیل خرید
     </button>}
    
      </>
    )
}
export default Basket;
