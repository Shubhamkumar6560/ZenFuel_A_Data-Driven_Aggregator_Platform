import React from 'react'
import Navbar from '../homecomponents/navbar';
import Player from '../homecomponents/player';
import Motion from '../homecomponents/framermotion';
import Feature from '../homecomponents/feature';
import Foot from '../homecomponents/footer';
function homepage() {
  return (
    <>
          <Navbar/>
          <Player/>
          <Motion/>
          <Feature/>
          <Foot/>
    </>
  )
}

export default homepage
