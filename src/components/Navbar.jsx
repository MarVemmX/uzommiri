// import React, { useState } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoClose } from "react-icons/io5";
// import Logo from "/assets/UzoLogo.png";
// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     console.log('Toggling menu');
//     setIsOpen(!isOpen);
//     console.log('Menu state:', !isOpen);
//   };

//   return (
//     <nav className=" bg-none p-4">
//       <div className="container mx-auto flex items-center justify-around space-x-16 ">
//         <div className="flex flex-row space-x-2  ">
//          <img
//          className='w-6 h-8 md:w-10 md:h-14'
//           src={Logo}/>
//          <div className='flex flex-col text-white -space-y-2  '>
//             <p className='text-sm md:text-3xl italic font-extrabold'>Uzommiri</p>
//             <p className='text-md md:text-2xl '>Study Center</p>
//          </div>
//         </div>
//         <div className="hidden md:flex space-x-10">
//           <a href="#" className="text-white">Home</a>
//           <a href="#" className="text-white">About</a>
//           <div href="#" className="trigger text-white">Initiatives</div>
//           <div className="sub">
//               <div className="item">Item 1</div>
//               <div className="item">Item 2</div>
//               <div className="item">Item 3</div>
//               <div className="item">Item 4</div>
//             </div>
//           <a href="#" className="text-white">Faith Formation</a>
//           <a href="#" className="text-white">Gallery</a>
//         </div>
//         <div>
//           Donate
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isOpen ? (
//               <IoClose />

//             ) : (
//               <RxHamburgerMenu/>
//             )}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-black text-white absolute w-40 top-20 left-48 right-4 mx-auto">
//           <a href="#" className="block py-2 px-4">Home</a>
//           <a href="#" className="block py-2 px-4">About</a>
//           <a href="#" className="block py-2 px-4">Services</a>
//           <a href="#" className="block py-2 px-4">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

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
    <nav className="bg-none p-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between space-x-20 ">
        <div className="flex flex-row space-x-2">
          <img
            className='w-6 h-8 md:w-14 md:h-20'
            src={Logo}
            alt="Logo"
          />
          <div className='flex flex-col text-white -space-y-2'>
            <p className='text-sm md:text-2xl lg:text-3xl italic font-extrabold'>Uzommiri</p>
            <p className='text-md md:text-xl lg:text-xl'>Study Center</p>
          </div>
        </div>
        <div className="hidden mt-10 lg:flex lg:text-xs space-x-16">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <div
            className="relative trigger text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className='flex flex row space-x-2'>
                <p>Initiatives</p>
               <p className='text-sm'> <FaCaretDown /></p>
            </div>
            <div
              className={`sub absolute left-0  w-40 bg-black text-center py-4 text-white transition-all duration-500 ease-in-out 
                ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
              <div className="item p-2">Tweens and Teens</div>
              <div className="item p-2">Young Adults</div>
              <div className="item p-2">Community Service</div>
            </div>
          </div>
          <a href="#" className="text-white">Faith Formation</a>
          <a href="#" className="text-white">Gallery</a>
        </div>
        <div className=' hidden lg:block font-bold  text-xl px-8 py-4 bg-white text-[#c1392b]'>
          Donate
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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
