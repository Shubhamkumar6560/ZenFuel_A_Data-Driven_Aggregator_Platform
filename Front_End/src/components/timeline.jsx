import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../homecomponents/variants.js';
import img10 from '../assets/imgg.png';
function timeline() {
  return (<>

    <div className="max-w-screen-2xl container mx-auto md:px-4 px-4 flex flex-col md:flex-row">
       <motion.div 
       
           variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView="show"
           viewport={{once:false , amount:0.3}}
       
       className='w-full md:w-1/2 mt-1 xl:mt-5 md:mx-3' >
       <div className="space-y-10">
        <h1 className='md:text-4xl text-2xl font-bold  text-white my-4'> Welcome to ZenFit, Where Every{" "}
          Workout Brings You Closer to{" "}
          <span className='text-yellow-400 animate-pulse hover:text-sky-500'>Your Goals!!!</span></h1>

          <label className="input input-bordered flex items-center gap-2 text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4  text-white">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow"  placeholder="Email" />
</label>

          <button className="btn glass items-center text-white bg-black my-4">Subscribe Now</button>
           <p className='my-6 text-xl flex text-justify font-semibold text-white'>
            Welcome to ZenFit, where your fitness journey begins! At our gym, we believe in empowering 
            individuals to reach their fullest potential, both physically and mentally.<br /><br />
            Whether you're a seasoned athlete or just starting out, we provide a supportive and
            motivating environment tailored to help you achieve your unique fitness goals.
           </p>
           </div>
          </motion.div>

          <div

                //  variants={fadeIn("left",0.3)}
                //  initial="hidden"
                //  whileInView="show"
                //  viewport={{once:true , amount:0.3}}
          
          className='w-fit md:w-1/2 mt-1 xl:mt-5 md:mx-3' >
        
        <img src={img10} className='w-full h-full' alt=""/> 
        </div>
        
    </div>

      
       
    </>
  )
}

export default timeline
