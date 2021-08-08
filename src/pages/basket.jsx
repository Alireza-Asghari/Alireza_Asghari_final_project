import React,{useEffect} from 'react';
import { useParams,useHistory } from 'react-router';
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';
import {HiPlus} from 'react-icons/hi'
import {HiMinusSm} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'

const Basket = () => {
    const history = useHistory()
    const {id} = useParams();
    const [data,setData] = React.useState(null)
    const [loading,setLoading] = React.useState(false)
    const [inputValue, setInputValue] = React.useState(Number)
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

    const Increasement=()=>{
        setInputValue(state => state +1)
    }
    const Decreasement=()=>{
        
        setInputValue(state =>{
            if(state > 0){
              return  state -1
            }
            else{
                return 0
            }
        } )
    }

    return (
       <>

        <div className='d-none  mx-auto header-top d-md-block justify-content-md-center align-items-md-center'>
            <ul className='row  p-3' >
                <li className='col-md-4 text-center'>شرح محصول</li>
                <li className='col-md-3 text-center'>تعداد</li>
                <li className='col-md-3 text-center'>قابل پرداخت (تومان)</li>
                <li className='col-md-2 text-center'>حذف</li>
            </ul>
        </div>

        <div className='main-wrapper h-50 pt-5 pt-md-0'>
           <div className='row flex-column flex-md-row con align-items-center main'>
                <div className="w-100 col-12 col-md-4 ">
                    <div className='w-100  text-center'>
                        <img src={data && `http://localhost:1337${data.image.url}`} className='image-basket' alt="#"/>
                    </div>
                    <div className='  text-center '>
                     <p className='title-basket-item'>{data && data.title}</p>
                    </div>
                    <div className=" text-center ">
                        <p className="price-basket-item">قیمت : {data && data.newPrice} تومان</p>
                    </div>
                    <div className=" text-center ">
                         <p className="taxt-basket-item"> مالیات بر ارزش افزوده : 0 </p>
                    </div>
                </div>
                <div className='col-12 col-md-4 text-center pb-3'>
                    <button type='button' className='but-decrease' onClick={Decreasement}>
                        <span><HiMinusSm color='white'/></span>
                    </button>
                    <input value={inputValue}  type="text" maxlength="3" size="3" className='p-1 text-center'/>
                    <button type='button' className='but-increase' onClick={Increasement}>
                        <span><HiPlus color='white'/></span>
                    </button>
                    
                </div>
                <div className="col-12 col-md-2 text-center">
                    <p className="reciept-basket-price m-md-0">{inputValue * (data && data.newPrice)}</p>
                </div>
                <div className="col-12 col-md-2 text-center close-basket" >
                   <FaTimes size="25px" color="red"/>
                </div>
           </div>
           <button type="button" onClick={()=> history.push('/best-selling/basket/user-info')}>
               تکمیل خرید
           </button>
           
        </div>
        
</>
    )
}
export default Basket;
