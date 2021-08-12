
import React,{useEffect} from 'react';
import {useParams,useHistory } from 'react-router';
import BasketComponent from './basker.component';
import { useSelector,useDispatch } from 'react-redux';

const Basket = () => {
    const [box,setBox] = React.useState([])
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
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
      </>
    )
}
export default Basket;
