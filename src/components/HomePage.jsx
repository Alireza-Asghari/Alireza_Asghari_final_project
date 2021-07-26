import React from 'react'
import Header from './header'
import CarouselBar from './carousel'
import Main from './HomePage.MainTitle'
import MainProduct from './HomePage.MainProduct'


const HomePage = () => {
    return (
  <div className="App">
      <Header/>
      <CarouselBar/>
      <Main/>
      <MainProduct/>
  </div> 
    )
}

export default HomePage
