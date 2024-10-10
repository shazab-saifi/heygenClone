import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, className }) => {
    return (
        <Link to='/signup' className={`bg-black text-white transition-colors hover:bg-#a34cdb inline-flex justify-center items-center text-center rounded-[10rem] font-medium py-3 px-6 cursor-pointer ${className || ''}`}>
            {children}
        </Link>
    )
}

export default Button