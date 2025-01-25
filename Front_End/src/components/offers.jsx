import React from 'react';
import Freelist from '../Json/freelist.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/cards';



function offers() {

  const filterData = Freelist.filter((item) => item.category === 'Free');

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3 ,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-4 px-4  text-white'>
    <hr></hr>
    <hr className='mt-4'></hr>
      <div className='pb-1'>
      <h1 className='font-semibold text-xl pb-1 mt-1 mx-3'>
        Try Now for Free 
      </h1>
      <p className='my-1 mx-3'>
        Kickstart your fitness journey with our free trial! Experience our
        top-notch facilities, a variety of classes, and expert trainers without
        any commitment. 
        <br></br><br></br>Sign up now and see how we can help you reach your
        fitness goals.
      </p>
      </div>
    <hr className='mt-1'></hr>
    <hr className='mt-4'></hr>

    <Slider {...settings}>

      { filterData.map((item)=>
        (
          <Card item={item} key={item.id}/>
        ))}
      </Slider> 
    </div>
    </>
  )
}

export default offers
