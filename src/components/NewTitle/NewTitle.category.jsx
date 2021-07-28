import React from 'react';

const NewTitleCategory = ({item}) => {
    return (
        <div className='main-product'>
        <div className='row h-100 w-100 row-product'>
           <div className='card-item '>
                <div className='positive'>
                    <img className=' img-fluid' src= {item.picture}/>
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>{item.title}</span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success' >{item.oldPrice}</span>
                        <span className='p-2 text-danger old-price' >{item.newPrice}</span>
                    </div>
                </div>
            </div> 
        </div>
     </div>
    )
}

export default NewTitleCategory;