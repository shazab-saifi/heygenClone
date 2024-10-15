import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, className }) => {
    return (
        <Link 
        to='/signup' 
        className={`w-[160px] h-[2.75rem] bg-black box-border text-white text-[.8rem] 
            transition-colors hover:bg-#a34cdb inline-flex justify-center items-center rounded-[10rem] font-medium cursor-pointer ${className || ''}`}
        style={{ fontFamily: 'Object Sans, sans-serif' }}
        >
            {children}
        </Link>
    )
}

export default Button