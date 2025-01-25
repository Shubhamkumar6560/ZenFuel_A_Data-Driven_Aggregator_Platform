import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Timeline from '../components/timeline';
import Offers from '../components/offers';
import Cards from '../components/cards';
import Footer from '../components/footer';
function entry() {
  return (
    <div>
      <Navbar/>
      <Carousel />
      <Timeline />
      <Offers/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default entry


