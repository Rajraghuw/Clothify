import React, { use, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Susbcribe from './components/Susbcribe/Susbcribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/popup/Popup'
const App = () => {
 
  useEffect(() => {
    AOS.init({
      offset: 100, // Offset (in px) from the original trigger point
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation 
      delay: 100, // Delay before the animation starts (in milliseconds)
    });
    AOS.refreshHard();
  }, [])

  const [OrderPopup, setOrderPopup] = React.useState(false);
 
  const handleOrderPopup = () => {
    setOrderPopup(!OrderPopup);
  };

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Susbcribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup OrderPopup={OrderPopup} setOrderPopup={setOrderPopup}/>
    </div>
    </>
  )
}

export default App
