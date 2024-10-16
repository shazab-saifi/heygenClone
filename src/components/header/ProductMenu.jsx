import React from 'react'
import { ChevronDown } from 'lucide-react'

const ProductMenu = ({ isOpen, onToggle }) => {
    return (
        <div className='relative text-[.9rem]'>
            <div className='p-[.625rem] flex items-center'
            onClick={onToggle}
            >
                <p className='cursor-pointer'>
                    Product
                </p>
                <ChevronDown className={`transition-transform w-4 h-4 ml-1 duration-200 ${isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-30'}`} />
            </div>
            {isOpen && <>
                <div className='fixed w-full h-full top-[92px] left-0 backdrop-blur-lg z-0'>
                    <div className='pt-16 pb-24 pl-48 pr-5 w-full'>
                        <div className='text-left flex gap-28'>
                            <a href="#">
                                <p className='uppercase text-#a34cdb text-[1.25rem] font-medium mb-[.75rem]'>create</p>
                                <p>Avatar Video</p>
                            </a>
                            <a href="#">
                                <p className='uppercase text-#a34cdb text-[1.25rem] font-medium mb-[.75rem]'>Localize</p>
                                <p>Video Transition</p>
                            </a>
                            <a href="#">
                                <p className='uppercase text-#a34cdb text-[1.25rem] font-medium mb-[.75rem]'>personalize</p>
                                <p>Personalize Video</p>
                            </a>
                            <a href="#">
                                <p className='uppercase text-#a34cdb text-[1.25rem] font-medium mb-[.75rem]'>Interact</p>
                                <p>Interactive Avatar Video</p>
                            </a>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ProductMenu;
