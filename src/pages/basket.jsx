
import React,{useEffect} from 'react';
import {useParams,useHistory } from 'react-router';
import { LoopCircleLoading } from 'react-loadingg';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from '../state/action-creators/export.actions';
import axios from 'axios'
import BasketComponent from './basker.component';

const Basket = () => {
    const history = useHistory()
    const {id} = useParams();
    const [data,setData] = React.useState(null)
    const [box,setBox] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const fetch = useSelector(state=>state.fetch);
    const {fetchData} = bindActionCreators(actionCreators, dispatch);

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

const fetchProducts =  () => {
  
    axios
   .get("http://localhost:1337/books")
   .then(res=>{
     fetchData(res.data) 
   }   
     )    
   };

 
 useEffect(() => {
   fetchProducts();
 }, []);
 

    return (
       <>

            {
                fetch.map(data=>{
                 
                    return(
                      <BasketComponent data={data}/>
                  )
                   
                }
                    )
            }
        
       </>
    )
}
export default Basket;
