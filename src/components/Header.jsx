import React from 'react'
import heygenlogo from '../assets/heygenLogo.svg'
import Button from './Button'

const Hearder = () => {
    return (
        <div className="w-full h-full box-border below-md:px-5">
            <div className='py-[.875rem] flex justify-between items-center'>
                <img src={heygenlogo} alt="Logo" width={100} />
                <Button children="Sign up for free">
                    Sign up for free
                </Button>
            </div>
        </div>
    )
}

export default Hearder