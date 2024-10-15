import React, { useState } from 'react'
import heygenlogo from '../assets/heygenLogo.svg'
import Button from './Button'
import { MenuIcon, X } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hearder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const isLinkClicked = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="w-full h-full box-border px-4">
        <div className='py-[.875rem] flex justify-between items-center leading-6'>
          <div className='max-w-[5.375rem] relative'>
            <img className='below-md:pl-[10px] w-full' src={heygenlogo} alt="Logo" />
          </div>
          <Button className='mr-3 ml-auto pt-[.75rem] pb-[.55rem]' >
            Sign up for free
          </Button>
          <div onClick={toggleMenu} className='relative cursor-pointer w-6 h-6 flex items-center mr-0'>
            <MenuIcon className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-75' : 'opacity-40 scale-100'}`} />
            <X className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-40 scale-100' : 'opacity-0 scale-75'}`} />
          </div>
        </div>
      </div>
      <div
        className={`
          ${isMenuOpen ? 'opacity-100 clip-path-open' : 'opacity-0 clip-path-closed'}
          transition-all ease-in-out duration-500
          w-full h-[90svh] min-w-[200px] z-50 absolute
        `}>
        <div className='w-full h-auto pt-4 tracking-wide leading-tight flex flex-col justify-between gap-3 items-start'>
          <div className='w-full py-[.625rem] px-4 text-[1rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Products</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[1rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Use Cases</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[1rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Resources</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[1rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Company</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <Link onClick={isLinkClicked} to="/pricing" className='w-full py-[.625rem] px-4 text-[1rem] flex justify-between items-center cursor-pointer'>
            Pricing
          </Link>
        </div>
        <div className='px-4 flex flex-col gap-4 text-[1rem]'>
          <Link to='/contact' className='w-full pr-7 py-[.625rem]'>
            Contact Sales
          </Link>
          <div>
            <Button className='py-[.5rem] px-4 text-[.875rem]' >
              Get started for free
            </Button>
          </div>
          <div>
            <Link className='py-2 px-6 text-[.875rem] text-black bg-#e6ecf1 text-center font-medium rounded-[30px]'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hearder