import React from 'react';
import {Link} from 'react-router-dom'


const BestSellingItems = ({item}) => {
console.log(item);
    return (
        <Link className='main-product' to={`/best-selling/${item.id}`}>
            {console.log(item.title)}
            <div className='row h-100 w-100 row-product'>
                <div className='card-item '>
                    <div className='positive'>
                        <img className=' img-fluid' src={`http://localhost:1337${item.image.url}`}/>
                        {console.log(item.image.url)}
                    </div>
                    <div className='flex-column d-flex align-items-center p-2'>
                        <span className='negative-s'>{item.title} </span>
                        <div className='d-flex justify-content-between w-100'>

                            <span className='p-2 text-success'>{item.oldPrice} تومان</span>
                            <span className='p-2 text-danger old-price'>{item.newPrice} تومان  </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default BestSellingItems;
