import React from 'react';
import Header from '../HomePage.header/header';

const ItemContentPage = () => {

    

    return (
       <>
            <Header/>
          <div className='main-container mx-auto'>
            <div className=' d-flex justify-content-start h-75 row'>
                <div className='ItemPicture d-flex justify-content-center justify-content-sm-center col-12 col-sm-5 col-md-4'>
                    <img src="https://jangal.com/api/ui/image/thumbnail?path=/uploads/product/gaddafis-harem_2.jpg&Size=450&fd=False" alt="#" className='as' />
                </div>
                <div className='d-flex justify-content-start ww pt-4 flex-column justify-content-around align-items-center align-items-sm-start col-12 col-sm-4 col-md-3'>
                    <div>
                        wefewef
                    </div>
                    <div>
                        reierjer
                    </div>
                    <div>
                        fdbdbiubbuiebuver
                    </div>
                </div>
            </div>
          </div>  
            
       </>
    )
}

export default ItemContentPage;
