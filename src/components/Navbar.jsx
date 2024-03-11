import React from 'react'
import { useState } from 'react';
import {logo}  from '../assets'
import { navLinks } from '../constants'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full flex justify-between items-center'>
     <img src={logo} alt='brand-logo' className='w-[110px] h-[90px] p-0'/>
     <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
           key={nav.id}
           className={`font-outfit text-secondary text-semibold text-[1.6vw] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
           <a href={`#${nav.id}`}>{nav.title}</a> 
          </li>
        ))}
     </ul>

    <div className='sm:hidden flex justify-end flex-1 items-center' onClick={() => setToggle((prev)=>(!prev))}>
       {toggle ? <IoClose className='w-[8vw] h-[8vh]'/> : <TiThMenu className='w-[6vw] h-[6vh]'/>}
    </div>

    <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-black absolute top-20 right-0 rounded-md sidebar z-10`}>
    <ul className='list-none flex flex-col justify-center items-center '>
        {navLinks.map((nav, index) => (
          <li
           key={nav.id}
           className={`font-outfit text-primary text-semibold text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
           <a href={`#${nav.id}`}>{nav.title}</a> 
          </li>
        ))}
     </ul>
    </div>
    </div>
  )
}

export default Navbar