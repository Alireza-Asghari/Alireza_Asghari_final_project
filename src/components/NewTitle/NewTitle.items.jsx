import React from 'react'

const NewTitleItems = () => {
    return (
        <div className='main-product'>
        <div className='row h-100 row-product'>
            <div className='card-item card-item1 kk'>
                <div className='positive'>
                    <img className='img1 img-fluid' src='https://jangal.com/api/ui/image/thumbnail?path=/uploads/product/the-testaments_2.jpg&Size=450&fd=False'/>
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>The Testament</span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success' >تومان 96،000</span>
                        <span className='p-2 text-danger old-price' >تومان 112،000</span>
                    </div>
                </div>
            </div> 
          
            <div className='card-item card-item2 mm'>
                <div className='positive'>
                    <img className=' img1 img-fluid' src='https://jangal.com/api/ui/image/thumbnail?path=/uploads/product/the-hard-thing-about-hard-things_2.jpg&Size=450&fd=False'/>
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>The hard thing about things</span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success' >تومان 91،000</span>
                        <span className='p-2 text-danger old-price' >تومان 105،000</span>
                    </div>
                </div>
            </div> 
        
         <div className='card-item card-item3 qq'>
                <div className='positive'>
                    <img className='img1 img-fluid' src='https://jangal.com/api/ui/image/thumbnail?path=/uploads/product/And-Then-There-Were-None-Agatha-Christie_2.jpg&Size=450&fd=False'/>
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>And then There were none</span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success' >تومان 80،000</span>
                        <span className='p-2 text-danger old-price' >تومان 90،000</span>
                    </div>
                </div>
        </div>
        
           <div className='card-item card-item4'>
                <div className='positive'>
                    <img className='img1 img-fluid' src='https://jangal.com/api/ui/image/thumbnail?path=/uploads/product/moonwalking-with-einstein_2.jpg&Size=450&fd=False'/>
                </div>
                <div className='flex-column d-flex align-items-center p-2'>
                    <span className='negative-s'>MoonWalking with Einstein</span>
                    <div className='d-flex justify-content-between w-100'>

                        <span className='p-2 text-success' >تومان 40،000</span>
                        <span className='p-2 text-danger old-price' >تومان 46،000</span>
                    </div>
                </div>
          </div> 

        </div>
     </div>
    )
}

export default NewTitleItems;
