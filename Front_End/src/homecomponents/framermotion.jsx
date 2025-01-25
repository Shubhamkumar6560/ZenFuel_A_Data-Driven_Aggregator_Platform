import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../homecomponents/variants.js';
import Img from '../assets/Zenn.png';
function framermotion() {
  return (
    <>


<div className='max-w-screen-2xl container mx-auto md:px-4 px-4 flex flex-col md:flex-row'>


    <div className='flex justify-center order-2 w-full md:w-1/2 mx-auto my-auto p-5 '>

    <motion.img 
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false , amount:0.5}}


    src={Img} className='md:w-80 md:h-80 w-48 h-48 ' alt='website_logo'>
      </motion.img>
      </div>


    <motion.div 
    variants={fadeIn("right",0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false , amount:0.5}}

    className='w-full md:w-1/2 order-1 my-5 mx-auto rounded-2xl p-5'>
    <a className='md:text-4xl text-2xl text-white'>Get One-on-One<br/>
      Attention with Our Trainers</a>
      <br/>
      <p className='text-white mt-10 text-justify'>At ZenFit, we believe that fitness is more than just working out — it’s about transforming your body, mind,
      and lifestyle.Our classes are designed to meet a variety of fitness goals, whether you are a beginner just starting your fitness journey or an experienced athlete looking to push your limits.
        <br/><br/>
        We offer a diverse range of group fitness classes that cater to different 
        interests and fitness levels. From high-intensity interval training (HIIT) and 
        strength training to yoga and Pilates, our classes are tailored to provide both 
        physical and mental benefits. You’ll improve your endurance, build strength, and 
        gain flexibility, while also reducing stress and improving your overall well-being.</p>
        <br/>
        <a className='flex flex-row text-teal-300 cursor-pointer'>See more Informations<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
        </a>
        
    </motion.div>

    </div>
    </>
  )
}

export default framermotion



