import React from 'react'
import Entry from './entrypage/entry';
import Homepage from './entrypage/homepage';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

function App() 
{
  return (<>
  <Routes> 
  <Route path="/" element={<Entry/>} />
  <Route path="/homepage" element={<Homepage/>}/>
  </Routes>
  <ToastContainer 
  
  
  />
      </>);
}

export default App
