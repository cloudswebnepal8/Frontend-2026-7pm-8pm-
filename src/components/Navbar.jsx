import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { Navlinks } from '../constants/Navlinks'

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-blue-400 fixed w-full z-1 text-white'>
            <div className='flex justify-between items-center p-2'>
                <NavLink className="flex gap-4 items-center">
                    <img src="/bpic.jpg" alt="" className='h-12' />
                    <h1>Ajay Shrestha</h1>
                </NavLink>
                <button className='sm:hidden bg-green-500 p-2 mr-2' onClick={() => setOpen(!open)}>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>


                <ul className='gap-4 hidden sm:flex sm:flex-row'>
                    {
                        Navlinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} >{link.name}</Link>
                            </li>

                        ))
                    }
                </ul>
            </div>

            {
                open && <ul className='absolute sm:hidden bg-gray-200 w-full text-black space-y-4 px-10 py-8 font-semibold'>
                    {
                        Navlinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} onClick={()=>setOpen(false)}>{link.name}</Link>
                            </li>

                        ))
                    }
                </ul>


            }
        </nav>
    )
}

export default Navbar

// ctrl+space key for suggestion 