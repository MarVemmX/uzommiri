import React from 'react'
import TeamGrid from './TeamGrid'

const Team = () => {
  return (
    <div className='py-8 xs:px-2 bg-black'>
        <div className='text-center text-white py-6'>
            <p className='text-3xl font-bold'>Meet the team</p>
            <p className='text-xl xs:px-20 '>The passionate individuals driving our misison</p>
        </div>
        <TeamGrid/>
    </div>
  )
}

export default Team