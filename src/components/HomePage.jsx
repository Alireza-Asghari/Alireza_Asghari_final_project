import React from 'react'
import Header from './HomePage.header/header'
import CarouselBar from './carousel'
import Main from './HomePage.header/HomePage.MainTitle'
import MainProduct from './HomePage.header/HomePage.MainProduct'
import Footer from './HomePage.header/footer'


const HomePage = () => {
    return (
  <div className="App">
      <Header/>
      <CarouselBar/>
      <Main/>
      <MainProduct/>
      
      <Footer/>
  </div> 
    )
}

export default HomePage;
