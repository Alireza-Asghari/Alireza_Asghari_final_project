
import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
 
 const CarouselBar = () => {
     return (
        <>
 <Carousel>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src="  https://jangal.com/uploads/slideshow/banner-the-midnight-library.jpg
      "
      alt="Third slide"
    />
 
   </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="	https://jangal.com/uploads/slideshow/IMG_20210529_230418_016.jpg
      "
      alt="Third slide"
    />
 
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src="	https://jangal.com/uploads/slideshow/banner-Golden-Box-new.jpg
      "
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://jangal.com/uploads/slideshow/banner-Cambridg-English-Ielts-16.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>

 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="	https://jangal.com/uploads/slideshow/banner-Harry-Potter-2.jpg
      "
      alt="Third slide"
    />
 
  </Carousel.Item>
  
</Carousel>
        </>
     )
 }
 
export default CarouselBar;
 


  