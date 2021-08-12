
import React,{useEffect} from 'react';
import {useParams,useHistory } from 'react-router';
import axios from 'axios';
import BasketComponent from './basker.component';
import { useSelector,useDispatch } from 'react-redux';

const Basket = () => {
    const [box,setBox] = React.useState([])
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const {id} = useParams()

  /*useEffect(() => {
        setLoading(true)
        axios
         .get("http://localhost:1337/books")
         .then(res=>{  
           setData(res.data.find(el=>el.id==id))
            setLoading(false)
           }
           
           )
           .catch(err=>console.log(err))
           
       }, [])

       useEffect(() => {
           if(data !== null || data !==undefined)
           setBox([...box,data

        ])
       }, [data])

 if(loading) return (<div><LoopCircleLoading size='large' speed='0.6'/></div>)
*/

/*const fetchProducts =  () => {
  
    axios
   .get("http://localhost:1337/books")
   .then(res=>{
    
   }   
     )   
     console.log(id);
     
   };

 
 useEffect(() => {
   fetchProducts();
 }, []);
 */

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
