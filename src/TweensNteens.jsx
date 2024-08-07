import React from 'react'
import NavBar from './components/Hero/NavbarBlack'
import PT1 from '/assets/PT1.png'
import PT2 from '/assets/PT2.png'
import PT3 from '/assets/PT3.png'
import PTB from '/assets/PTB.png'
import duck from '/assets/duck.png'
import TTGallery from '/assets/TTGallery.png'
import PTDesktop from '/assets/PTDesktop.png'
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa" ;
import Footer from './components/Footer'


const TweensNteens = () => {
  return (
    <div>
        <NavBar/>

        <div>
            <p className='md:text-5xl xs:px-4 xs:text-2xl py-2 font-bold md:py-4 md:text-center'>Tweens and Teens</p>
            <p className='md:text-4xl text-xl md:py-4 xs:px-4 font-bold md:text-center'>Pearl Club</p>
        </div>
        <div className='md:hidden py-6 xs:block flex-col w-full  '>
            <div className='flex flex-row w-[36vw]'>
                <img src={PT1}/>
                <img src={PT2}/>
                <img src={PT3}/>
            </div>
            <img  className='w-full' src={PTB}/>
        </div>
        <div className='hidden md:block '>
            <img className='w-full' src={PTDesktop}/>
        </div>

        <div className='xs:px-4 md:px-20 py-4 text-lg  md:py-8 md:text-xl'>
            <div className=''>
                The Pearl Club is an extra-curricular initiative which gives personalized all-round formation to girls between the ages of 8 and 16 years.
                <br/>The extracurricular  activities organized by the club are geared towards grooming the girls towards becoming better sisters, daughters and friends while preparing them for their role as future leaders and responsible members of society. The activities carried out in a safe space and an atmosphere of friendship and fun also go to  reinforcing values fostered at home. It is held every Saturday from 10am to 2pm.
            </div>
    
            <div className='flex flex-col lg:flex-row w-full lg:space-y-14 lg:space-x-20'>
                <div className='py-14 lg:w-[80%]'>
                    <p className='italic pb-4' >Our Activities Include:</p>
                    <img src={duck}/>
                </div>
                <div className='flex flex-col '>
                    <div className=''>
                        <p> To become a member, click the link below to register</p>
                        <a className='underline text-[#c1392b] font-bold' href='https://www.bit.ly/pearlclubregistration'> www.bit.ly/pearlclubregistration</a>
                    </div>
                    <div className='w-[100%]'>
                        <p className='py-6 font-bold text-3xl pt-16'>Pearl Study Group</p>
                        <p>An after-school weekday program that helps to inculcate good study habits in the girls and ensure better academic performances through study, mentoring, wholesome discussions and research under close supervision. It is held every weekday, from 3pm to 6.30pm. 
                         <br/>To be a part of it, pls follow this link: <a className='underline text-[#c1392b] font-bold' href='https://www.bit.ly/pearlclubregistration'>www.bit.ly/pearlclubregistration</a></p>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div>
                <p className='md:text-5xl xs:px-4 xs:text-2xl py-2 font-bold md:py-4 md:text-center'>YouLIP</p>
                <p className='md:text-4xl text-xl md:py-4 xs:px-4 font-bold md:text-center'>Young Leaders in practice</p>
            </div>
    
            <div className='xs:px-4 md:px-20 py-4 text-lg  md:py-8 md:text-xl'>
                <div className=''>
                     A one-year leadership programme for girls in their first and second years of  senior secondary school (SS1 and SS2) who are interested in making an impact in society, becoming better versions of themselves and taking up leadership positions at an early age.
                </div>
                <p> Click the link to sign up and get interviewed: <a className='underline text-[#c1392b] font-bold' href='https://www.bit.ly/youlip'>www.bit.ly/youlip</a></p>
            </div>
            <img className='w-full md:py-10 py-4' src={TTGallery}/>
        </div>

        <div className='lg:px-20 xs:px-4'>
            <div>
                <p className='md:text-5xl xs:px-4 xs:text-2xl font-bold md:py-4  md:text-center'>Contact Us</p>
            </div>
            <div className='flex lg:flex-row flex-col justify-around gap-20 '>
                
                <div className='flex md:flex-row flex-col'>
                   <div className=''>
                        <div className='flex flex-row'>
                            <p className='px-1 py-1 bg-[#c1392b] text-white rounded-full'> <MdEmail/> </p>:
                            <p>pearlclub042@gmail.com</p>
                        </div>
                        <div className='flex flex-row px-2 py-2'>
                            <p className='px-1 py-1 bg-[#c1392b] text-white rounded-full'> <MdEmail/> </p>:
                            <p>youlip2020@gmail.com</p>
                        </div>
                   </div>
                   <p className='font-bold text-xl lg:px-20 md:px-10 py-4 '>Or Call</p>
                   <div className='flex flex-row py-2 xs:px-6'>
                        <p  className='absolute -ml-6 px-1 py-1 bg-[#c1392b] text-white rounded-full'> <FaPhone/> </p>:
                        <div className='px-2 lg:pr-40 '>
                            <p>09085418026</p>
                            <p>08141722408</p>
                            <p>08065295038</p>
                        </div>
                    </div>
                <div>
                    <p>Blog <a className='underline text-[#c1392b] font-bold' href='https://www.pearlclub042.blogspot.com'>www.pearlclub042.blogspot.com</a></p>
                    <p>Get to Know more about the pearl club</p>
                </div>
                </div>
            </div>
        </div>
        <div className='py-8'>

        </div>
        

        <Footer/>
    </div>
  )
}

export default TweensNteens