import React from 'react'
import Expanded from './components/About/Collabs'
import NavBar from './components/Hero/NavbarBlack'
import Team from './components/About/Team'
import Partners from './components/About/Partners'
import Footer from './components/Footer'
// import USection1 from './components/About/section1'

const AboutPage = () => {
  return (
    <div>
        <NavBar/>
        <Expanded/>
        <Team/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default AboutPage