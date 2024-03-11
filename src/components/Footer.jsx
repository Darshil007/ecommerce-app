import React from 'react'
import styles from '../style'
import {logo}  from '../assets'
import { ContactUsList,footerLinks } from '../constants'
const Footer = () => {
  return (
    <section id='contactus' className={`flex justify-around items-center bg-primary`}>
      <div className={`flex justify-around items-center sm:items-start flex-col font-outfit font-semibold text-[15px]`}>
      <img src={logo} alt='brand-logo' className='w-[125px] h-[100px] p-0'/>
      {ContactUsList.map((contacts,index) => (
        <span className='p-4 text-center'>{contacts.contact}</span>
      ))}
      </div>
      <div className='hidden sm:flex justify-around items-start flex-col font-outfit font-semibold text-[15px]'>
          <div className='font-bold text-[23px] py-4'>{footerLinks[0].title}</div>
          {footerLinks[0].links.map((address,index) => (
            <span className='py-2'>{address.name}</span>
          ))}
      </div> 
      <div className='hidden sm:flex justify-around items-start flex-col font-outfit font-semibold text-[15px]'>
      <div className='font-bold text-[23px] py-4'>{footerLinks[1].title}</div>
          {footerLinks[1].links.map((address,index) => (
            <span className='py-2'>{address.name}</span>
          ))}
      </div> 
    </section>
  )
}

export default Footer