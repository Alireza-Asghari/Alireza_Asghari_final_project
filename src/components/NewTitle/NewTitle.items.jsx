import React from 'react'

const NewTitleItems = () => {
    return (
        <Link className='main-product' to={`/new-title/${item.id}`}>
           
        <div className='row h-100 w-100 row-product'>
            <div className='card-item '>
                <div className='positive'>
                    <img className=' img-fluid' src={`http://localhost:1337${item.image.url}`}/>
            
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>{item.title} </span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success'>{item.newPrice}  تومان</span>
                        <span className='p-2 text-danger old-price'>{item.oldPrice}تومان  </span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}

export default NewTitleItems;
