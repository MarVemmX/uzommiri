
import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import Logo from "/assets/UzoLogo.png";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu');
    setIsOpen(!isOpen);
    console.log('Menu state:', !isOpen);
  };

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        setIsHovered(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <nav className="bg-none z-50 p-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between space-x-20 ">
        <div className="flex flex-row text-black space-x-2">
          <img
            className='w-6 h-8 md:w-14 md:h-16'
            src={Logo}
            alt="Logo"
          />
          <div className='flex flex-col -space-y-2'>
            <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
            <p className='text-md md:text-xl lg:text-xl'>Study Center</p>
          </div>
        </div>
        <div className="hidden mt-10 text-black lg:flex lg:text-xs space-x-16">
          <a href="#" className="">Home</a>
          <a href="#" className="">About</a>
          <div
            className="relative trigger "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className='flex flex row space-x-2'>
                <p>Initiatives</p>
               <p className='text-sm'> <FaCaretDown /></p>
            </div>
            <div
              className={`sub z-50 absolute left-0  w-40 bg-black text-center py-4 text-black transition-all duration-500 ease-in-out 
                ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
              <div className="text-white item p-2">Tweens and Teens</div>
              <div className="text-white item p-2">Young Adults</div>
              <div className="text-white item p-2">Community Service</div>
            </div>
          </div>
          <a href="#" className="">Faith Formation</a>
          <a href="#" className="">Gallery</a>
        </div>
        <div className=' hidden lg:block font-bold ext-white text-xl px-8 py-4 text-white bg-[#c1392b]'>
          Donate
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
             <p className='text-3xl'> <IoClose /></p>
            ) : (
             <p className='text-3xl'> <RxHamburgerMenu /></p>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-black py-6 text-center text-white text-sm absolute w-48 top-24  right-2 mx-auto">
          <a href="#" className="block py-2 px-4">Home</a>
          <a href="#" className="block py-2 px-4">About Uzommiri</a>
          <a href="#" className="block py-2 px-4">Tweens and Teens</a>
          <a href="#" className="block py-2 px-4">Young Adults</a>
          <a href="#" className="block py-2 px-4">Community Service</a>
          <a href="#" className="block py-2 px-4">Faith Formation</a>
          <a href="#" className="block py-2 px-4">Gallery</a>
          <a href="#" className="block py-2 px-12"> <p className=' bg-[#c1392b] py-2 mb-6'>Donate</p></a>

        </div>
      )}
    </nav>
  );
};

export default NavBar;
