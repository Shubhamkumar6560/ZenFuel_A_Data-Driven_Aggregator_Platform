import React from 'react'
import { X } from 'lucide-react';
import Pic from '../assets/pretty.jpg'
import google from '../../src/assets/search.png'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function login({onClose}) {

  const[isLogin,setIsLogin]=useState(true);
  const[userEmail,setUserEmail]=useState("");
  const[userPassword,setUserPassword]=useState("");
  const[password,setconfirmPassword]=useState("");
  // const[errormessage,seterrormessage]=useState("");


  const toggleForm=()=>
  {
    setIsLogin(!isLogin);
  };

  const emailValidation=()=>
  {
    if(!userEmail)
    {
      toast.error("Email is required !!",{position:"top-center",autoClose:4000,theme:"dark"});
      return false;
    }
    else if(!userEmail.includes("@gmail.com"))
    {
      toast.warn("Only use google email address",{position:"top-center",autoClose:4000,theme:"dark"});
      return false;
    }
    return true;
  };

  const passwordValidation=()=>
  {
    if(!userPassword)
    {
      toast.error("Password is required !!",{position:"top-center",autoClose:4000,theme:"dark"});
      return false;
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&]).{8,}$/.test(userPassword))
    {
      toast.warn("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
        ,{position:"top-center",autoClose:4000,theme:"dark"});
      return false;
    }
    else if(password !== userPassword)
    {
      toast.warn("Password does not match",{position:"top-center",autoClose:4000,theme:"dark"});
      return false;
    }
    return true;
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    if(!emailValidation())
      return;

    if(isLogin)
    {
      try
      {
        const login = {email:userEmail,password:userPassword}
        const res = await axios.post(`http://localhost:2001/login`,login)
        console.log("response",res);
       
        if(res.status === 200)
        {
          toast.success(res.data.message,{position:'top-center',autoClose:2000,theme:"dark"})
        }
        else
        {
          toast.error(res.data.message,{position:'top-center',autoClose:2000,theme:"dark"});
        }
        setUserEmail("");
        setUserPassword("");

      }
      catch(error)
      {
        console.error("Error",error);
        toast.error(res.data.message,{position:'top-center',autoClose:2000,theme:"dark"});
      }
    }
    else
    {

    if(!passwordValidation())
        return;

    try {
      const formDataRegister={email: userEmail,password: userPassword}
 
      console.log("email",userEmail);
      console.log("password",userPassword);
      
      const res= await axios.post(`http://localhost:2001/register`,formDataRegister)
      
      // console.log("response",res);
      if(res.status === 200)
      {
        toast.success("Registration Successfull !",{position:'top-center',autoClose:2000,theme:"dark"});
        setUserEmail("");
        setUserPassword("");
        setconfirmPassword("");
      }     
      else
      {
        toast.error("Registration Failed !",{position:'top-center',autoClose:2000,theme:"dark'"});
      }

    } catch (error) {
        console.log(error.message);   
    }
  }
  };
  return (
    <div className='h-screen inset-0 backdrop-blur-lg flex justify-center items-center text-black relative'>
  <div className='flex flex-col text-black relative'>


    <div className="card lg:card-side shadow-xl lg:mb-32 bg-white m-10">
      <div className=' hidden lg:block rounded-l-2xl overflow-hidden'>
      <figure>
        <img 
          src={Pic}
          alt="Album"
          className='h-[550px] w-full'
        />
      </figure>
      </div>

      <div className="card-body">
      <button onClick={onClose} className='mt-2 absolute top-0 right-2'>
        <X size={30} />
      </button>
        <h1 className="card-title justify-center my-2">

        {isLogin ? 'Welcome Back':'Create Account'}

        </h1>

<label className="px-4 py-3 rounded-lg flex items-center gap-2 my-2 mt-5 border-2 border-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 text-black">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input onChange={(e) => setUserEmail(e.target.value)}
  type="text" className="flex-grow bg-white outline-none" placeholder="Email" required/>
</label>


<label className="px-4 py-3 rounded-lg flex items-center gap-2 mb-2 border-2 border-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4  text-black">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} 
  type="password" className="flex-grow  bg-white outline-none" placeholder="Password" required/>
</label>

{!isLogin && (

<label className="px-4 py-3 rounded-lg flex items-center gap-2 mb-2 border-2 border-black">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4  text-black">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input value={password} onChange={(e)=>setconfirmPassword(e.target.value)} 
  type="password" className="flex-grow  bg-white outline-none" placeholder="Confirm Password" required />
</label>
)}
{/* {errormessage && <span className='text-red-500 text-sm'>{errormessage}</span>} */}

        <a className='underline text-right '>Forgot Password !!</a>

        <div class="flex w-full flex-col">

        <div class="divider divider-success">Or</div>
        </div>

        <button className="flex items-center gap-2 px-4 py-4 bg-white border text-center border-gray-300 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-150">
        <img
        src={google}
        alt="Google Logo"
        className="w-5 h-5"
      />
        <span className="text-sm font-medium text-gray-700">{isLogin ?'Sign in with Google':'Sign up with Google'}</span>
      </button>

      <p className='cursor-pointer hover:underline text-center my-3 ' onClick={toggleForm}>{isLogin ? 'Don`t Have Account ? Register Now !' : 'Already Have an Account? Login!'}</p>


        <div className="card-actions justify-end">
          <button onClick={handleSubmit} className="btn btn-primary flex justify-center px-36 py-4 bg-teal-700 text-white  hover:bg-teal-200 hover:text-black rounded-none rounded-br-2xl rounded-tl-2xl">
            {isLogin ? 'Submit':'Register'}</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default login


