import React,{useEffect} from 'react'
import Header from '../HomePage.header/header';
import NewTitleItems from './NewTitle.items.jsx';
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';

const NewTitle = () => {

    const [items,setItems] = React.useState(null);
    const [loading,setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true)
        axios
        .get("http://localhost:1337/categories")
        .then(res=>{
           let getCategoryData = res.data.find(el=>el.title=='new-titles')
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
        <h3 className='d-flex pt-4 pr-5'>عناوین جدید </h3>
        <div className='main-product'>
            <div className='row h-100 row-product'>

              {
                items && items.map((item,index)=>{
                    return(
                        <>
                            <div key={index}>
                               <NewTitleItems
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

export default NewTitle;
