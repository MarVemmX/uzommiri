import React from 'react'
import WB from '/assets/WB.png'
import Kamp from '/assets/Kamp.png'
import Ezindo from '/assets/Ezindo.png'
import lantana from '/assets/lantana.png'



const Partners = () => {
  return (
    <div className='py-10 xs:px-4 md:px-20 '>
        <div className='text-center'>
            <p className='text-3xl  font-bold'>Our Collaborators</p>
            <p className='text-2xl py-2'>Partnerships that drive our Success</p>
        </div>
       <div className=' py-10 flex flex-col lg:flex-row lg:justify-between xs:gap-14 lg:gap-28'>
            <div className=''>
                <img src={WB}/>
                <p className='py-6 text-lg'>Women’s Board – Educational Cooperation Society is a Nigerian not-for-profit, non-governmental organization working since 1972 for the development of women of any background, ethnic group or religion. The organization has projects in different parts of the country including Uzommiri Study Centre.</p>
                <div>
                    <p className='font-bold'>Find out more at </p>
                    <a className='underline text-[#c1392b] font-bold' href='https://www.womensboard.org.ng'>Women's Board – Educational Cooperation society</a>
                </div>
            </div>
            <div>
                <img src={Kamp}/>
                <p className='py-6 text-lg'>Kamp Konnect is a fun-filled, adventure camp aimed at developing character, community service and leadership skills among the participants who are senior secondary school girls from different parts of the country. The Kamp holds yearly in the secure environment of the Pan-Atlantic University. </p>
                <div>
                    <p className='font-bold'>To find out more, visit: </p>
                    <a className='underline text-[#c1392b] font-bold' href='https://www.kampkonnect.org'>kampkonnect</a>
                </div>
            </div>
            <div>
                <img src={Ezindo}/>
                <p className='py-6 text-lg'>Ezindo Women’s Development Centre is located in Enugu and focuses on the overall development of young and not-so-young women of all social conditions, creeds and works of life. The activities of the centre include professional development, personality development, financial literacy, health education, and home management skills as well as entrepreneurship and skills acquisition.  The centre provides training in life skills, empowering women for their role as the backbone of the family and hence the society. </p>
                <div>
                    <p className='font-bold'>For more Info, visit: </p>
                    <a className='underline text-[#c1392b] font-bold' href='https://www.nawa.org.ng/2019/07/17/ezindo'>EZINDO CENTRE FOR WOMEN'S DEVELOPMENT – NAWA</a>
                </div>
            </div>
       </div>

       <div className='lg:px-14 px-0'>
            {/* <img src={lantana}/> */}
                <div className="bg-[url('/assets/lantana.png')] bg-cover bg-center p-2 lg:p-10 text-lg text-center flex  justify-center align-center text-white">
                  <div className='lg:px-10 lg:w-3/5  py-4'>
                        <p className='py-4 text-xl font-bold'>Lantana College of Hospitality</p>
                        <p className='py-2 text-xs md:text-lg'>Lantana College of Hospitality provides young women from less privileged backgrounds in Enugu with technical and professional skills, enabling them to break the poverty cycle for their families and communities. </p>
                        <p className='text-xs md:text-lg'>For more Info, visit: <a className='underline ' href='https://www.lantanacollege.org'>Lantana College of Hospitality </a>
                         </p>
                  </div>
                    
                </div>
       </div>
    </div>
  )
}

export default Partners