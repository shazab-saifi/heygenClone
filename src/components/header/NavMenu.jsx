import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ProductMenu from './ProductMenu'

const NavItems = ({ label, children, isOpen }) => {
  return (
    <>
      <div className='relative text-[.9rem] bg-white'>
        <div className='p-[.625rem] flex items-center'>
          <p className='cursor-pointer'>
            {label}
          </p>
          <ChevronDown className={`transition-transform w-4 h-4 ml-1 duration-200 ${isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-30'}`} />
        </div>
        {isOpen && <>
          <div className='absolute origin-top-left left-0 top-full transition-transform duration-200 w-auto min-w-[19.375rem] p-[1.25rem] overflow-hidden rounded-[.5rem] bg-white'>
            <div className='flex items-stretch justify-end flex-col gap-4'>
              {children}
            </div>
          </div>
        </>}
      </div>
    </>
  )
}

const menuItems = [
  {
    label: "Use Cases",
    children: ["Agencies", "Sales", "Marketing", "Learning & Development", "Localization"]
  },
  {
    label: "Resources",
    children: ["Blog", "Sales", "Affiliate Program", "Weekly Webinar", "Help Center"]
  },
  {
    label: "Company",
    children: ["About Us", "Safety and Ethics", "Careers"]
  }
]

const NavMenu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
    setOpenMenuIndex(null);
  }

  return (
    <div className='flex justify-start items-center bg-white'>
      <ProductMenu isOpen={isProductMenuOpen} onToggle={toggleProductMenu} />
      {menuItems.map((item, index) => (
        <div 
        key={item.label} 
        onClick={() => {
          toggleMenu(index);
          setIsProductMenuOpen(false);
          }} >
          <NavItems
            key={item.label}
            label={item.label}
            isOpen={openMenuIndex === index}
          >
            {item.children.map((child) => (
              <a
                key={child}
              >
                {child}
              </a>
            ))}
          </NavItems>
        </div>
      ))}
    </div>
  );
}

export default NavMenu