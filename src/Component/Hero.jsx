import React from 'react';
import hero1 from './image/hero1.jpg';
import hero2 from './image/hero2.jpg';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-[#05185B] '>
      <div className='flex flex-col lg:flex-row py-20 justify-around'>
        <div className='text-white flex flex-col'>
          <img src={hero1} alt="" className='w-80 rounded-xl shadow-sm'/>
          <div className='pt-10 text-center'>
            <h2 className='text-2xl font-bold'>Abacus Mental Math</h2>
            <p>Create genius in mathematics with speed and accuracy</p>
          </div>
        </div>
        <div className='text-white flex flex-col lg:flex-col-reverse'>
          <img src={hero2} alt="" className='w-80 rounded-xl shadow-md pb-10 lg:pt-10'  />
          <div className='text-center'>
            <h2 className='text-2xl font-bold'>Kids Coding</h2>
            <p>help your kids discovery the tech in them</p>
          </div>
        </div>
      </div>
      <div className='pb-10 flex items-center justify-center'>
        <Link to='/'>
          <span>
            <button className='text-white font-semibold border-2 border-[#EDAD08] bg-[#EDAD08] rounded-full py-2 px-8'>
              Request a Demo Class
            </button>
          </span>
        </Link>
      </div>
    
    </div>
  )
}

export default Hero