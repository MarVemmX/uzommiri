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
  const backgroundImageMobile = 'url(/assets/ellipse_mobile.png)';

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
        <div className="relative flex flex-col justify-center py-0 md:py-10 xs:px-4 sm:text-center text-white ">
          <div className=' font-bold xs:text-2xl text-3xl md:text-8xl ' >
              <p>Empowering
           {/* desktop view     */}
          <span
              className='relative hidden px-4 py-10 bg-no-repeat bg-cover md:inline-block italic'
              style={{
                backgroundImage: backgroundImage,
              }}
          >
          Women
        </span>
        {/* //mobile view */}
          <span
              className='relative md:hidden xs:pl-4 px-4 pb-2 bg-cover bg-no-repeat inline-block italic'
              style={{
                backgroundImage: backgroundImage,
                paddingTop: "14px",
              }}
          >
          Women
        </span>
               <br className='md:hidden'/>for a Brighter Future</p>
          </div>
          <div className='py-4 md:py-10 text-sm md:text-4xl'>Join us in building responsible young leaders</div>

          <div className='flex flex-row sm:justify-center sm:text-center space-x-6 md:py-8  '>
            <p className='py-1 md:py-4 px-6 md:px-16 border-2 md:border-4 '>
              Learn more
            </p>
            <p className='py-1 md:py-4 px-2 font-bold md:px-10 bg-white border-2 md:border-4 border-white text-[#c1392b]'>
              Donate
            </p>
          </div>
        </div>
      </section>
   </div>
  );
};

export default HeroSection;
