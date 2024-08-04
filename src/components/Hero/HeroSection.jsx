import React, { useEffect, useState } from 'react';
import './heroStyles.css';
import NavBar from '../Navbar';

const HeroSection = () => {
  const images = [
    '/assets/hero1.png',
    '/assets/hero2.png',
    '/assets/hero3.png',
    '/assets/hero4.png',
    
  ];

  const backgroundImage = 'url(/assets/EllipseWoman.png)';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    
   <div className='bg-pink-300'>
      <section className="hero relative md:h-screen xs:h-72" id="hero" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className='absolute inset-0 bg-[#c1392b] opacity-60'></div>
      <div className='relative z-10'>
      <NavBar/>
      </div>
        <div className="relative flex flex-col justify-center py-4 md:py-10 xs:px-4 md:text-center text-white ">
          <div className=' font-bold text-2xl md:text-8xl ' >
              <p>Empowering
              <span
          className='relative px-4 py-10 inline-block italic'
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // padding: '0rem 0rem', // Adjust padding as needed
        
          }}
        >
          Women
        </span>
               <br className='md:hidden'/>for a Brighter Future</p>
          </div>
          <div className='py-4 md:py-10 text-sm md:text-4xl'>Join us in building responsible young leaders</div>

          <div className='flex flex-row justify-center text-center space-x-6 py-8  '>
            <p className='py-4 md:px-16 border-4 '>
              Learn more
            </p>
            <p className='py-4 md:px-10 bg-white border-4 border-white text-[#c1392b]'>
              Donate
            </p>
          </div>
        </div>
      </section>
   </div>
  );
};

export default HeroSection;
