import React from 'react'

const Footer = () => {
    return (
        <div className='footer-homePage'>
           <div className='row justify-content-center'>
              <div className='col-12 col-md-3 text-center p-3'>
                  <img src='https://jangal.com/uploads/siteinfo/Home-page-logo_3_2.png' alt='#'/>
              </div>
              <div className='d-flex flex-column align-items-center col-12 col-md-3 p-3'>
                 <span className='m-3'>دسترسی سریع</span>
                 <ul className='ul-footer text-right'>
                   <li>درباره ما</li>
                   <li>تماس با ما</li>
                   <li>قوانین و مقررات سایت</li>
                  </ul>
               </div>
               <div className='d-flex flex-column align-items-center col-12 col-md-3 p-3'>
                   <span className='m-3'>راهنمایی انلاین  </span>
                   <ul className='ul-footer text-right'>
                      <li> سوالات متداول</li>
                      <li> فرصت های شغلی </li>
                      <li> نحوه خرید  </li>
                    </ul>
                </div>
                <div className='d-flex flex-column align-items-center col-12 col-md-3 p-3'>
                   <span className='m-3'>خدمات مشتریان</span>
                   <ul className='ul-footer text-right'>
                      <li> پیشنهاد چاپ کتاب</li>
                      <li> رویه بازگشت کالا</li>
                    </ul>
                </div>
            </div>
       </div> 
    )
}

export default Footer;
