import React from 'react'
import Home from './Home/Home'
import Tour from './Tour/Tour'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Guide from './Guide/Guide'
import Discount from './Discount/Discount'
import Review from './Review/Review'


const HomePage = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Guide/>
      <Tour/>
      <Discount/>
      <Review/> 
      <Footer/>
    </>
  )
}

export default HomePage