import React, { useEffect, useState } from 'react';
import First from '../assets/gymmac.jpg';
import Second from '../assets/cartoon.jpg';
import Third from '../assets/fit.jpg';
import Fourth from '../assets/girlgym.jpg';
import './carousel.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1); 
  const totalSlides = 4; 
  const carouselInterval = 5000; 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    }, carouselInterval);

    return () => clearInterval(interval); 
  }, [totalSlides, carouselInterval]);

  return (
    <div className='max-w-screen-2xl container mx-auto '>
      <div className="carousel mt-16">
        <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          <img src={First} className="w-fit"/>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(4)}>❮</a>
            <a href="#slide2" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(2)}>❯</a>
            <div className="absolute -bottom-28 left-0 right-0 text-white text-center px-3 py-2 hidden md:block rounded-xl ">
            <h2 className="text-xl md:text-2xl font-bold ">Unleash Your Potential</h2>
            <p className="text-sm md:text-base ">Get In. Get Fit. Get on with Life</p>
            </div>
            </div>
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <img src={Second} className="w-fit" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(1)}>❮</a>
            <a href="#slide3" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(3)}>❯</a>
            <div className="absolute -bottom-28 left-0 right-0 text-black text-center px-3 py-2 hidden md:block rounded-xl ">
            <h2 className="text-xl md:text-2xl font-bold ">Fitness for Every Body</h2>
            <p className="text-sm md:text-base ">No Pain, No Gain</p>
            </div>
          </div>
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
          <img src={Third} className="w-fit" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(2)}>❮</a>
            <a href="#slide4" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(4)}>❯</a>
            <div className="absolute -bottom-28 left-0 right-0 text-black text-center px-3 py-2 hidden md:block rounded-xl ">
            <h2 className="text-xl md:text-2xl font-bold ">Push Beyond Limits</h2>
            <p className="text-sm md:text-base ">Commit to be fit.</p>
            </div>
          </div>
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
          <img src={Fourth} className="w-fit" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(3)}>❮</a>
            <a href="#slide1" className="btn btn-circle hidden md:inline-flex text-white mx-2" onClick={() => setCurrentSlide(1)}>❯</a>
            <div className="absolute -bottom-28 left-0 right-0 text-black text-center px-3 py-2 hidden md:block rounded-xl ">
            <h2 className="text-xl md:text-2xl font-bold ">Empower Your Fitness Journey</h2>
            <p className="text-sm md:text-base ">No Pain, No Gain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
