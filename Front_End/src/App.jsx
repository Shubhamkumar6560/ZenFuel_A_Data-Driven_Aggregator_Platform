import React from 'react'
// import Blinds from './background/blinds';
import Entry from './entrypage/entry';
import Homepage from './entrypage/homepage';
import About from './entrypage/renabout';
import Classes from './entrypage/renclasses';
import Price from './entrypage/renprices';
import Profile from './entrypage/renprofile';
import Demo from './entrypage/rendemo';
import Book from './entrypage/renbook';
import Careers from './entrypage/rencareers';
import Location from './entrypage/renlocation';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import SchedulePage from './entrypage/renschedule';

function App() 
{
  return (<>

<div>
  <Routes> 
  <Route path="/" element={<Entry/>} />
  <Route path="/homepage" element={<Homepage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/classes' element={<Classes/>}/>
  <Route path='/prices' element={<Price/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/demo' element={<Demo/>}/>
  <Route path='/book' element={<Book/>}/>
  <Route path='/schedule' element={<SchedulePage/>}/>
    <Route path='/location' element={<Location/>}/>
 <Route path='/careers' element={<Careers/>}/>
  </Routes>
  <ToastContainer/>
  </div>
      </>);
}

export default App
