import React from 'react'
import { RiFileLine } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { RiCalendar2Fill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center' >
            <div>
                <p className='text-4xl font-serif'>Jot.</p>
                <div id='text' className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <RiFileLine />
                        <span>8 notes</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <RiStarLine />
                        <span>0 starred</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <RiCalendar2Fill />
                        <span>7 active today</span>
                    </div>
                </div>


            </div>
            <div>
                <button id='NewNote' className='rounded-full px-8 py-2 flex items-center gap-4 text-white    '>
                    <span className=''>+</span>
                    <span className=''>NewNote</span>
                    </button>
            </div>
        </div>
    )
}

export default Navbar
