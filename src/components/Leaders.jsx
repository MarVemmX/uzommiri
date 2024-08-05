import React from "react";
import Youlip from "/assets/YouLIP.png";
import Bloom from "/assets/BLOOM.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Leaders = () => {
  return (
    <div>
      <div className="text-center text-sm font-bold px md:text-2xl  py-4">Building and Empowering Responsible Young Leaders</div>
      <div className="flex flex-col xs:gap-4 md:gap-10 w-full px-[8.5%]">
      {/* <div className='relative inset-0 bg-[#c1392b] opacity-60'></div> */}
       <div> 
          <img src={Youlip}/>
       </div>
       <div >
         <img src={Bloom}/>
      </div>
      </div>
     <div className="text-center py-10 justify-center align-center">
        <div >
            <p className="font-bold text-2xl md:text-3xl">Follow us</p>
            <p className="font-xl py-4 ">Follow us and Stay updated on all our activities</p>
            <div className="flex flex-row text-[#c1392b] text-4xl space-x-2 align-center justify-center ">
              <a className="" href=""><FaFacebook/></a> 
              <a href=""><FaLinkedin/></a>
              <a href=""><SiGmail/></a> 
            </div>
        </div>
     </div>
    
    </div>
  );
};

export default Leaders;
