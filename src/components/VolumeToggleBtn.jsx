import React from 'react'
import { Volume2, VolumeOff } from 'lucide-react'

const VolumeToggleBtn = ({classname, onClick, isMute}) => {
  return (
    <div onClick={onClick} className={`w-12 h-12 p-[.20rem] border border-solid rounded-[.5rem] border-#fff3 backdrop-blur-md flex items-center justify-center cursor-pointer ${classname || ''}`}>
        <div onClick={onClick} className='w-full h-full bg-white rounded-[.4rem] flex items-center justify-center'>
            {isMute ? <VolumeOff className='w-7'/> : <Volume2 className='w-7'/>}
        </div>
    </div>
  )
}

export default VolumeToggleBtn