import React, { useEffect,useState  } from 'react';

function navbar() {
  const [sticky,setSticky]=useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  useEffect(() => {
    const handleScroll =() => {
      if(window.scroll>0  )
      {
        setSticky(true);
      }
      else{
        setSticky(false);
      }
  };

  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll',handleScroll)
  }




},)
  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto fixed left-0 right-0 top-0 z-50${
      sticky?"sticky-navbar shadow-md duration-300 transition-all ease-in-out":""
    }`}
    >
 <div className="navbar bg-black md:bg-white md:bg-opacity-70">
  <div className="navbar-start">

    <div className="dropdown hover:dropdown-open">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white md:text-black text-2xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
        <li><a href='/'>Login</a></li>
        <li><a href='/homepage'>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>

  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-white md:text-black animate-bounce text-2xl" href="/homepage">ZenFuel</a>
  </div>


  <div className="navbar-end space-x-5">

  <div className="hidden md:block ">
  <label className=" px-3 py-2 border rounded-lg bg-white flex items-center gap-2  border-stone-950">
  <input type="text" className="grow outline-none text-black bg-white" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>

<label className="swap swap-rotate">
  <input type="checkbox" className="theme-controller" value="synthwave" />

  <svg
    className="swap-off h-8 w-8 fill-current text-white md:text-black"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <svg
    className="swap-on h-8 w-8 fill-current text-white md:text-black"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

    <div className="dropdown dropdown-end hover:dropdown-open ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge text-white">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<nav className=" bg-zinc-700 md:bg-stone-950 md:bg-opacity-70 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          {/* <img className="w-14 h-14 rounded-full p-1" src="../public/ZenFit.webp" alt='logo'></img> */}
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">HOME</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">CLASSES</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">PRICE</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">TRAINERS</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">LOCATIONS</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">SCHEDULE</a>
              <a href="#" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">CAREERS</a>
            </div>
          </div>
          <span className='inline-flex justify-items-end md:hidden'>Welcome !! , Hello EveryOne</span>
          <div className="mr-1 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white
             hover:text-cyan-300">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">HOME</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">ABOUT</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">CLASSES</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">LOCATIONS</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">CONTACTS</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">CAREERS</a>
          <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">CONTACTS</a>
        </div>
      </div>
    </nav>

</div>


    </>
  );
}

export default navbar;
