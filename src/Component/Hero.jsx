import React from 'react';
import hero1 from './image/hero1.jpg';
import hero2 from './image/hero2.jpg';

const Hero = () => {
  return (
    <div>
      <div className='bg-[#05185B] flex flex-col lg:flex-row'>
        <div className='text-white'>
          <img src={hero1} alt="" className='w-64'/>
          <h2>Kids Coding</h2>
          <p>help your kids discovery the tech in them</p>
        </div>
        <div className='text-white'>
          <img src={hero2} alt="" className='w-64' />
          <h2>Abacus Mental Math</h2>
          <p>Create genius in mathematics with speed and accuracy</p>
        </div>
      </div>
    </div>
  )
}

export default Hero