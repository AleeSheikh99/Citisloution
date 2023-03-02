import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/Animation.png"
import Common from './Common'
function About() {
  return (
    <div>
       <Common name ='Welcome to About section' 
       imgsrc={web} visit='/contact' 
       btname='Contact now'/>     
    </div>
  )
}

export default About
