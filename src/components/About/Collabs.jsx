// import React, { useState } from "react";

// const ExpandedText = ({ children }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxChar = 20;
  
//   if (children.length <= maxChar) return <p>{children}</p>;
  
//   const textSummary = isExpanded ? children : `${children.substring(0, maxChar)}...`;

//   return (
//     <p>
//       {textSummary}
//       <button 
//         onClick={() => setIsExpanded(!isExpanded)} 
//         style={{
//           background: "none",
//           border: "none",
//           color: "#b12087",
//           cursor: "pointer",
//           padding: 0,
//           marginLeft: "5px"
//         }}
//       >
//         {isExpanded ? "See Less" : "See More"}
//       </button>
//     </p>
//   );
// };

// // Example usage with lorem text
// const Expanded = () => (
//   <div>
//     <ExpandedText>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
//     </ExpandedText>
//   </div>
// );

// export default Expanded;


import React from 'react'
import OPUS from '/assets/STJose.png'
import { GoDotFill } from 'react-icons/go';

const Expanded   = () => {
  return (
    <div>
        <div>
            <p className='md:text-5xl xs:px-4 xs:text-2xl py-2 font-bold md:py-4 md:text-center'>About Uzommiri</p>
            <div>
              <div className='md:px-20 px-4 md:py-12 xs:py-2'>
                <p className='md:text-4xl text-xl md:font-light xs:font-bold italic '>What we are</p>
                <p className='md:text-2xl text-md xs:leading-5 xs:pt-4  md:pt-8'>Uzommiri Study Centre is a project of the Women’s Board of the Educational Cooperation Society, a not-for-profit organization established in 1972 for the development of women of diverse background, ethnic group or religion. Uzommiri Study Centre has been empowering women in Enugu and surrounding cities since 1980. </p>
             </div>
             <div className='text-white text-lg md:justify-around w-full flex lg:flex-row flex-col gap-6 md:gap-4 md:px-0 lg:pr-12'>
               <div className='flex flex-col lg:flex-row  lg:w-2/3 xs:gap-4 xs:px-4 lg:justify-around'>
                  <div className='px-4 md:px-10 py-6 bg-black'>
                    <p className='italic text-2xl'>Vision</p>
                    <p className='md:w-80 xs:w-70 py-4'>To equip girls and young women for their future role as leaders and responsible members of society </p>
                  </div>
                  <div className='px-4 md:px-10 py-4 bg-[#c1392b]'>
                    <p className='italic text-2xl'>Mission</p>
                    <p className='md:w-80 xs:w-70 py-4'>To give holistic formation to girls and young women in Nigeria through a process of education and mentoring in the areas of academic excellence, leadership and personality development. </p>
                  </div>
               </div>
                <div className='px-8 lg:w-1/3 md:px-10 py-4 bg-black'>
                  <p className='italic text-2xl'>Aim</p>
                  <p className='md:w-80 xs:w-70 py-4'>Formation through activities on good study habits, leadership, personality development, the art of the home and rural/community development. </p>
                </div>
             </div>
             <div className='py-10 flex flex-col lg:flex-row '>
                  <img className='' src={OPUS}/>
                <div className='xs:p-8   lg:w-2/5 md:text-lg '>
                  <p className='italic md:pb-6 lg:pb-12 font-bold xs:text-xl md:text-2xl'>Opus dei</p>
                  <p>Opus Dei is a personal prelature of the Catholic Church founded in 1928 by St. Josemaría Escrivá de Balaguer. Its mission is to help people seek holiness in everyday life by turning their work and daily activities into occasions for growing closer to God, serving others and improving society. Opus Dei complements the work of local churches by offering classes, recollections, retreats and spiritual direction that help people develop their spiritual life. Opus Dei's name is Latin for "Work of God."</p>
                  <p className=' xs:pt-2 flex flex-row'><p className='py-1'><GoDotFill/></p>  <p className='px-2'>For more information about Opus Dei, visit-</p> </p> <p className='px-6'><span className='underline pr-1'>www.opusdei.org </span> or <span className='underline pl-1'>www.opusdei.ng</span></p>
                </div>
             </div>
            </div>

        </div>
    </div>
  )
}
  
export default Expanded