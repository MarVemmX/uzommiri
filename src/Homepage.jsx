import React from 'react'
import HeroSection from './components/Hero/HeroSection'
import Activities from './components/Activities'
import Calendar from './components/Calender'
import Leaders from './components/Leaders'
import Footer from './components/Footer'

const Homepage = () => {
  return (
    <div>
        <HeroSection/>
        <Activities/>
        <Calendar/>
        <Leaders/>
        <Footer/>
    </div>
  )
}

export default Homepage