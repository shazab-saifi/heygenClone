import React, { useState } from 'react'
import heygenlogo from '../../assets/heygenLogo.svg'
import Button from '../Button'
import { MenuIcon, X } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'

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
      <div className="w-full h-full box-border px-4 custom-md:px-6 text-[.9rem]">
        <div className='py-[.875rem] custom-md:py-4 flex justify-between items-center'>
          <div className='custom-sm:pl-[10px] custom-md:pl-0'>
            <img className='w-[86px] custom-sm:w-[131px] custom-md:w-[160px] custom-lg:w-[172.5px]' src={heygenlogo} alt="Logo" />
          </div>
          <div className='hidden custom-md:flex items-center justify-center'>
            <NavMenu />
            <Link className='px-[1.25rem] py-[.625rem]' to='/pricing'>Pricing</Link>
          </div>
          <div className='flex w-auto justify-between custom-md:ml-[22rem] gap-2'>
            <Link to='/contact' className='hidden custom-md:ml-auto custom-md:block custom-md:py-[.625rem] custom-md:px-5'>
              Contact Sales
            </Link>
            <Button className='custom-md:ml-auto ml-20 custom-md:w-[183.5px] custom-md:h-full px-6 pb-[.55rem] w-[170.05px] pt-[.75rem] h-[44.8px] whitespace-nowrap'>
              Sign up for free
            </Button>
            <Link className='py-2 px-6 text-[.8rem] text-black bg-#e6ecf1 text-center font-medium rounded-[30px] hidden custom-md:flex items-center justify-center custom-md:font-semibold custom-md:h-full custom-md:px-6 custom-md:py-[.70rem] transition-colors hover:bg-#a34cdb hover:text-white'>
              Login
            </Link>
          </div>
          <div onClick={toggleMenu} className='relative cursor-pointer w-6 h-6 flex items-center mr-0 custom-md:hidden'>
            <MenuIcon className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-75' : 'opacity-40 scale-100'}`} />
            <X className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-40 scale-100' : 'opacity-0 scale-75'}`} />
          </div>
        </div>
      </div>
      <div
        className={`
          ${isMenuOpen ? 'opacity-100 clip-path-open' : 'opacity-0 clip-path-closed'}
          transition-all ease-in-out duration-500
          w-full h-[90svh] min-w-[200px] z-50 absolute custom-md:hidden
        `}>
        <div className='w-full h-auto pt-4 tracking-wide leading-tight flex flex-col justify-between gap-1 items-start'>
          <div className='w-full py-[.625rem] px-4 text-[.8rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Products</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[.8rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Use Cases</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[.8rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Resources</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <div className='w-full py-[.625rem] px-4 text-[.8rem] flex justify-between items-center'>
            <p className='cursor-pointer'>Company</p>
            <ChevronDown className='opacity-20 cursor-pointer' />
          </div>
          <Link onClick={isLinkClicked} to="/pricing" className='w-full py-[.625rem] px-4 text-[.8rem] flex justify-between items-center cursor-pointer'>
            Pricing
          </Link>
        </div>
        <div className='px-4 flex flex-col gap-4 text-[.8rem]'>
          <Link to='/contact' className='w-full pr-7 py-[.625rem]'>
            Contact Sales
          </Link>
          <div>
            <Button className='py-[.5rem] px-4 text-[.8rem]' >
              Get started for free
            </Button>
          </div>
          <div>
            <Link className='py-2 px-6 text-[.8rem] text-black bg-#e6ecf1 text-center font-medium rounded-[30px]'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hearder