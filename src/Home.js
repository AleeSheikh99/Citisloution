import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/man.png"
import Common from './Common'
function Home() {
  return (
    <div>
     <Common  name ='Grow up your business' 
       imgsrc={web} visit='/service' 
       btname='Get Started'/>
    </div>
  )
}

export default Home
