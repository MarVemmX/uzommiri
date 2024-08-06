import React from 'react'
import ExpandText from './Expandedtxt'
import Emilia from '/assets/Emilia.png'
import Ijeoma from '/assets/Ijeoma.png'
import Kambi from '/assets/Kambi.png'
import Nneka from '/assets/Nneka.png'
import Chika from '/assets/chika.png'
import Philipia from '/assets/philipia.png'
import Loveth from '/assets/Loveth.png'

const TeamGrid = () => {
  return (
    <div className='text-white xs:px-10 md:gap-4 pb-12 md:px-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4' >
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Emilia}/>
            </div>
            {/* name */}
            <p className='pt-4'>Emilia Ivenso</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Executive Director</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Emilia was born in and grew up in Lagos, Nigeria. She has a degree in Psychology and an MSc in Industrial/Organizational Psychology from the University of Ibadan, Nigeria. She also holds a masters degree in Educational management from Centro Universidad Villanueva Madrid Spain. After working for nine years as a facility manager in Lagos and Ibadan, for various non-profits, coordinating women's educational programs, she moved to Enugu where she worked as Human Resources Manager and Personal Assistant to the MD of a Pharmaceutical Company. After 4 years of working in this capacity, she went on to help start up Roseville Nursery and Primary School where she currently works as the School Advisor and Secretary to the management. In Uzommiri Study Centre, as well as some other non-profits, she coordinates educational programs for young girls. She has a passion for mentoring young people.
                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Ijeoma}/>
            </div>
            {/* name */}
            <p className='pt-4'>Ijeoma Ohuche</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Director of Operations</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Ijeoma has a bachelor of Medicine and Surgery degree from the University of Nigeria, Nsukka. After graduating as a doctor , she proceeded to gather a wealth of experience in general medical practice before focusing on a residency training in Paediatrics at the University of Nigeria Teaching hospital, Enugu. She is a Fellow of the West African College of Physicians ( Faculty of Paediatrics), and currently practices as a Consultant Pediatrician in the same hospital, as well as in Niger Foundation Hospital, Enugu. She is very passionate about mentorship for young girls at the different stages of their lives with over a decade of experience in the coaching of these young minds, and continues to do so through working on various projects of Uzommiri Study Centre. 
                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Kambi}/>
            </div>
            {/* name */}
            <p className='pt-4'>Kambi Ngwu</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Director of Finance</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Chikambinaka 'Kambi' Ngwu is a medical doctor with an interest in family medicine, ethics in medical practice and holistic formation of women. A graduate of University of Nigeria Nsukka, she worked as a medical officer and actively contributed in formational activities for young girls for some years before going on to obtain a Bachelors’ in Theology from the Pontifical University of the Holy Cross, Rome. She is currently in training as a family physician and has continued to actively assist in direction and formation of the beneficiaries of Uzommiri Study Centre. 
                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Nneka}/>
            </div>
            {/* name */}
            <p className='pt-4'>Nneka Iloanusi</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Director of Outreaches</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Nneka is a consultant radiologist in University of Nigeria Teaching Hospital, Enugu, with a passion as well as an extensive experience in teaching, coaching and mentoring people. She has also been a key figure in facilitating Uzommiri's partnership with Medical Women Association, in organising and carrying out outreaches for women and children in various communities within and beyond Enugu, of which many students have been a part of. She maintains that young people can achieve and offer a lot with good study habits and hardwork. This has led to her focusing on helping them achieve their aim through proper integration of faith, good character and a professional work ethics beginning from school.Nneka is a consultant radiologist in University of Nigeria Teaching Hospital, Enugu, with a passion as well as an extensive experience in teaching, coaching and mentoring people. She has also been a key figure in facilitating Uzommiri's partnership with Medical Women Association, in organising and carrying out outreaches for women and children in various communities within and beyond Enugu, of which many students have been a part of. She maintains that young people can achieve and offer a lot with good study habits and hardwork. This has led to her focusing on helping them achieve their aim through proper integration of faith, good character and a professional work ethics beginning from school.
                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Chika}/>
            </div>
            {/* name */}
            <p className='pt-4'>Chika Nnaji</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Legal Advisor</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Born and raised in Enugu, Chika is a graduate of the Faculty of Law, University of Nigeria, Nsukka with a Masters of Law degree in view from the same institution. She is a member of the Nigerian Institute of Chartered Arbitrators with extensive legal litigation and advisory experience. She also has a  track record of driving prosecution of cases and mentoring younger or less experienced colleagues thus contributing to work productivity. In addition to her legal profession, Chika devotes a lot of time to volunteering. She piloted a two-year EU sponsored project for rural women in Enugu state as a representative of the Women's Board of Educational Cooperation Society. In Uzommiri Study Centre, she continues to pursue her passion for mentoring young minds through the different literacy and mentorship programmes, which the centre offers its beneficiaries, as well as offer legal advice.
                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Philipia}/>
            </div>
            {/* name */}
            <p className='pt-4'>Philipia Onuchie</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Programme Director</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    Philipa is a teacher by profession, working in various educational institutions since 2011. She has a degree in Biochemistry, a Diploma and Masters degree in Education Administration and Planning.
                    Alongside her work as a teacher, she works with non-for-profit organizations that promote the integral formation of the girl child.
                    At Uzommiri Study Centre, she directs the activities of school girls in the Pearl club.
                    In 2020 she helped launch the YouLiP programme which prepares girls in senior secondary schools for leadership roles and higher education.
                    She has been responsible for various extra curricular and educational programs in and from Uzommiri, helping girls to actualize their potential. 

                </ExpandText>
            </div>
        </div>
        <div className='pb-8'>
            {/* image */}
            <div> 
                <img src={Loveth}/>
            </div>
            {/* name */}
            <p className='pt-4'>Loveth Nwankwo</p>
            {/* position */}
            <p className='italic py-2 text-lg'>Programme Director</p>
            {/* content */}
            <div className='w-4/5 '>
                <ExpandText>
                    No recent bio 
                </ExpandText>
            </div>
        </div>
        
    </div>
  )
}

export default TeamGrid