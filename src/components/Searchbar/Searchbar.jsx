import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { RiStarLine } from "react-icons/ri";


const Searchbar = () => {
  return (
<div className='flex items-center gap-4 w-full py-6'>
    
    <div className='relative flex-1'>
        <RiSearchLine
            className='absolute left-4 top-1/2 -translate-y-1/2 text-xl'
        />

        <input
            type='text'
            placeholder='Search your thoughts...'
            className='
                w-full
                py-2
                pl-12
                pr-4
                bg-white
                rounded-xl
                shadow-md
                focus:outline-none
                focus:ring-0
            '
        />
    </div>

    <button
        className='bg-white rounded-xl shadow-md p-3'
    >
        <RiStarLine />
    </button>

</div>
  )
}

export default Searchbar
