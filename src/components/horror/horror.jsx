import React,{useEffect} from 'react';
import Header from '../HomePage.header/header';
import HorrorItems from './Horror.items'
import axios from 'axios';
import { LoopCircleLoading } from 'react-loadingg';

const Horror = () => {
    const [items,setItems] = React.useState(null);
    const [loading,setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true)
        axios
        .get("http://localhost:1337/categories")
        .then(res=>{
           let getCategoryData = res.data.find(el=>el.title=='horror')
           setItems(getCategoryData.books);  
           setLoading(false)
          }
          
          )
          .catch(err=>console.log(err))
         
    }, [])
    if (loading) return(<div><LoopCircleLoading/></div>)
    return (
        <>
            <Header/>
            <h3 className='d-flex pt-4 pr-5'>ژانر ترسناک</h3>
            <div className='main-product'>
                <div className='row h-100 row-product'>

                  {
                     items && items.map((item,index)=>{
                        return(
                            <>
                                <div key={index}>
                                   <HorrorItems
                                       
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

export default Horror;
