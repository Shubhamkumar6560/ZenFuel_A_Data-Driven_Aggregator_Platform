import React, { useEffect, useState } from 'react';
import { useGoogleAuth } from '../userAuthentication/googleAuth';
import { Link } from 'react-router-dom';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useGoogleAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto fixed left-0 right-0 top-0 z-50 ${
          sticky ? 'sticky-navbar shadow-md duration-300 transition-all ease-in-out' : ''
        }`}
      >
        <div className="navbar bg-black md:bg-white md:bg-opacity-70">
          {/* Left menu */}
          <div className="navbar-start">
            <div className="dropdown hover:dropdown-open">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white md:text-black text-2xl"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
              >
                <Link to="/">
                  <li>
                    <a>Login</a>
                  </li>
                </Link>
                <Link to="/homepage">
                  <li>
                    <a>Homepage</a>
                  </li>
                </Link>
                <li>
                  <a href="https://darkdev-sk.netlify.app/">Portfolio</a>
                </li>
                <Link to="/about">
                  <li>
                    <a>About</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {/* Center brand */}
          <div className="navbar-center">
            <a className="btn btn-ghost text-white md:text-black animate-bounce text-2xl" href="/homepage">
              ZenFuel
            </a>
          </div>

          {/* Right side (search + theme + user menu) */}
          <div className="navbar-end space-x-5">
            <div className="hidden md:block ">
              <label className="px-3 py-2 border rounded-lg bg-white flex items-center gap-2 border-stone-950">
                <input
                  type="text"
                  className="grow outline-none text-black bg-white"
                  placeholder="Search"
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* Dark/Light mode */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg
                className="swap-off h-8 w-8 fill-current text-white md:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z..." />
              </svg>
              <svg
                className="swap-on h-8 w-8 fill-current text-white md:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
              </svg>
            </label>


            <div className="dropdown dropdown-end hover:dropdown-open">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                {user?.picture ? (
                  <img src={user.picture} alt="User" className="w-10 h-10 rounded-full border" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "?"}
                  </div>
                )}
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
              >
                {user && (
                  <li className="px-3 py-2">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </li>
                )}
                <li>
                  <Link className="justify-between" to="/profile">
                    Profile <span className="badge text-white">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <Link to="/">
                  <li>
                    <a onClick={logout}>Logout</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Second nav bar */}
        <nav className="bg-zinc-700 md:bg-stone-950 md:bg-opacity-70 text-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center"></div>
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <Link to="/homepage" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    HOME
                  </Link>
                  <Link to="/about" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    ABOUT
                  </Link>
                  <Link to="/classes" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    CLASSES
                  </Link>
                  <Link to="/prices" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    PRICE
                  </Link>
                  <Link to="/book" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    TRAINERS
                  </Link>
                  <Link to="/location" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    LOCATIONS
                  </Link>
                  <Link to="/schedule" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    SCHEDULE
                  </Link>
                  <Link to="/careers" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium">
                    CAREERS
                  </Link>
                </div>
              </div>
              <span className="inline-flex justify-items-end md:hidden">Welcome !! , Hello EveryOne</span>
              <div className="mr-1 flex md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-300"
                >
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
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                HOME
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                ABOUT
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                CLASSES
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                LOCATIONS
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                CONTACTS
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                CAREERS
              </a>
              <a href="#" className="text-white hover:bg-cyan-300 hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                CONTACTS
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
