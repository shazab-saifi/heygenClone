import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, className }) => {
    return (
        <Link 
        to='/signup' 
        className={`bg-black text-white text-[.8rem] transition-colors hover:bg-#a34cdb inline-flex justify-center items-center rounded-full font-medium cursor-pointer ${className || ''}`}
        style={{ fontFamily: 'manishfont, sans-serif' }} 
        >
            {children}
        </Link>
    )
}

export default Button