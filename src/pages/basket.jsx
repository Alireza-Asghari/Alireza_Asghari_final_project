import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';
import {HiPlus} from 'react-icons/hi'
import {HiMinusSm} from 'react-icons/hi'

const Basket = () => {
    const {id} = useParams();
    const [data,setData] = React.useState(null)
    const [loading,setLoading] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    useEffect(() => {
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
 if(loading) return (<div><LoopCircleLoading size='large' speed='0.6'/></div>)

    const handleInputValue=(e) =>{
        setInputValue(e.target.value)
    }     

    return (
        <div className='main-wrapper h-50 pt-5'>
           <div className='row flex-column con align-items-center'>
                <div className='w-100 col-12 text-center'>
                <img src={data && `http://localhost:1337${data.image.url}`} className='image-basket' alt="#"/>
                </div>
                <div className=' col-12 text-center'>
                    <p className='title-basket-item'>{data && data.title}</p>
                </div>
                <div className="col-12 text-center">
                    <p className="price-basket-item">قیمت : {data && data.newPrice} تومان</p>
                </div>
                <div className="col-12 text-center">
                    <p className="taxt-basket-item"> مالیات بر ارزش افزوده : 0 </p>
                </div>
                <div className='col-12 text-center'>
                    <button type='button' className='but-decrease'>
                        <span><HiMinusSm color='white'/></span>
                    </button>
                    <input onChange={(e)=>handleInputValue(e)} type="text" maxlength="3" size="3" className='p-1 text-center'/>
                    <button type='button' className='but-increase'>
                        <span><HiPlus color='white'/></span>
                    </button>
                    
                </div>
           </div>
        </div>
    )
}
export default Basket;
