import React from 'react'
import Header from './header'
import CarouselBar from './carousel'
import Main from './HomePage.MainTitle'
import MainProduct from './HomePage.MainProduct'


const HomePage = () => {
    return (
       <>
      <Header/>
      <CarouselBar/>
      <Main/>
      <MainProduct/>
       </>
    )
}

export default HomePage
