import React from 'react'
import Fee from '../assets/youngsport.jpg';
import { fadeIn } from './variants';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './feature.css'


const parallex =()=>{
  const[islarger,setislarger] =useState(false);

  useEffect(()=>{

    const handleResize=()=>{
      setislarger(window.innerWidth>768);
    };

    handleResize();
    window.addEventListener("resize",handleResize);

    return ()=>{
      window.removeEventListener("resize",handleResize);
    };
    },[]);

  const firstCardFull='At ZenFit, our gym classes are designed to suit all fitness levels, whether you’re a beginner or an advanced athlete We offer a variety of classes, including high-intensity interval training (HIIT), strength training, yoga, and Pilates. Each class focuses on improving strength, endurance, flexibility, and overall well-being. ';

  const firstCard='At ZenFit, our gym classes are designed to suit all fitness levels, whether you’re a beginner or an advanced athlete We offer a variety of classes...'; 

  const secondCard='';

  return (
    <>
    <motion.div 
            variants={fadeIn("up",0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once:true , amount:0.7}}
    
    className='text-center my-10 md:mt-15 text-white mx-4'>
          
    <h2 className='md:text-4xl my-3 text-2xl text-center'>Explore Our Classes</h2>
    <p className='text-xl my-3'>Transform Your Body, Transform Your Life</p>
    <hr></hr>

    </motion.div>


      <div className='max-w-screen-2xl container mx-auto flex flex-col md:flex-row md:px-4 px-4'>

      <div className='w-full md:1/3 p-2 order-1'>
      <div className='zoomi rounded-2xl'>
        <img src={Fee} alt=''/>
        </div>
        <h3 className='capitalize text-xl mx-auto my-3 ml-1 text-teal-200'>Fitness Classes to Fuel Your Journey</h3>
        <h3 className='text-lg ml-1 text-white text-justify mx-auto my-3'>

        {islarger ? firstCard: firstCardFull }
        </h3>
           <a className='flex flex-row text-teal-300 cursor-pointer ml-1'>Read More<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
      </a>
      </div>
    
      <div className='w-fit md:1/3 p-2 order-2 '>
      <div className='rounded-2xl'>
        <img src={Fee} alt=''/>
        </div>
        <h3 className='capitalize text-xl mx-auto my-3 ml-1 text-teal-200'>Fitness Classes to Fuel Your Journey</h3>
        <h3 className='text-lg ml-1 text-white text-justify mx-auto my-3'>At ZenFit, our gym classes are designed to suit all fitness levels, whether you’re a beginner or an advanced athlete.
           We offer a variety of classes, including high-intensity interval training (HIIT), strength training, yoga, and Pilates. Each class focuses on improving strength, endurance, flexibility, and overall well-being.</h3>
           <a className='flex flex-row text-teal-300 cursor-pointer ml-1'>Read More<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
        </a>
      </div>

      <div className='w-full md:1/3 p-2 order-3'>
        <img src={Fee} alt='' className='rounded-2xl justify-evenly'></img>
      </div>

      </div>
      <div className='flex justify-center mx-auto'>
      <button className=" flex justify-center px-16 my-3 py-4 bg-teal-700 text-white  hover:bg-teal-200 hover:text-black rounded-br-2xl rounded-tl-2xl">See More</button>
      </div>
    </>
  )
}

export default parallex
