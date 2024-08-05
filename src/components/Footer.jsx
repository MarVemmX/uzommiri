import React from 'react'
import Logo from "/assets/UzoLogo.png";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa" ;
import {MdLocationOn} from "react-icons/md"
const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-around lg:py-12 bg-[#c1392b] p-6'>
        <div className="flex flex-row space-x-2">
          <img
            className='w-6 h-8 md:w-14 md:h-20 lg:w-20 lg:h-24'
            src={Logo}
            alt="Logo"
          />
          <div className='flex flex-col text-white -space-y-2'>
            <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
            <p className='text-md md:text-xl lg:text-xl'>Study Center</p>
          </div>
        </div>

        <div className='xs:text-sm py-4 text-white'>
            <p className='text-2xl pb-2 font-bold'>Contact Us</p>
            <div className='flex flex-row'>
                <p className='px-2 py-2 bg-black rounded-full'> <MdEmail/> </p>:
                <p className='mt'>uzommiristudyctr@gmail.com</p>
            </div>
            <div className='flex flex-row py-2'>
                <p  className='relative px-2 py-2 bg-black rounded-full'> <FaPhone/> </p>:
                <div className='absolute px-10' >
                    <p>+234 806 138 6268</p>
                    <p>+234 806 763 8748</p>
                    <p>+234 908 541 8026</p>
                </div>
            </div>
            <div className=' py-6 flex flex-row'>
                <p className='relative px-2 py-2 bg-black rounded-full'> <MdLocationOn/>  </p> 
                <p className='mt-2'>:11A Igboeze Street Independence Layout, Enugu</p>
            </div>
        </div>
        <div className='text-white list-none'>
            <p className='text-2xl font-bold '>Info</p>
            <div className='py-2 space-y-2'>
                <li>Home</li>
                <li>About Uzommiri</li>
                <li>Tweens and Teens</li>
                <li>Young Adults</li>
                <li>Community Service</li>
                <li>Faith</li>
                <li>Gallery</li>
            </div>
            <li>Donate</li>
        </div>
    </div>
  )
}

export default Footer