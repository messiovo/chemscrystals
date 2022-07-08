import React from 'react';
import logo from './image/logo.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='bg-[#EDAD08] flex flex-col lg:flex-row py-4 lg:justify-around content-center items-center'>
        <div className='flex items-center lg:pr-96'>
          <img src={logo} alt="" className='w-8' />
          <h2 className='font-bold pl-2 text-xl'>
            ChemsCrystals
          </h2>
        </div>
        <ul className='flex flex-col lg:flex-row gap-8 font-semibold'>
          <li>
            <Link to='/'>
              <span>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>
                Online Learning
              </span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>
                Pricing
              </span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span>
                Contact
              </span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar