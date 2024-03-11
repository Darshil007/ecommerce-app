import React from 'react'
import styles from '../style'
import {hero} from '../assets'
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='text-clip'>
    <section id='home' className={`flex md:flex-row sm:justify-around flex-col  md:px-40`} >
      <div className={`flex-1 ${styles.flexStart} md:flex flex-col hidden xl:px-0 sm:pr-4 px-3`}>
          <div className={`flex justify-center items-center sm:items-start flex-col w-full h-[40%]`}>
            <h1 className={`flex-1 font-outfit text-[50px] sm:text-start text-center leading-[70px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]`}>Classic Exclusive</h1>
            <h1 className='flex-1 font-outfit text-[52px] sm:text-start text-center font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]'>Women's Collection</h1>
            <h1 className='flex-1 font-outfit text-[30px] leading-[70px] pl-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]'>upto 40% off</h1>
            <button className={`flex items-center bg-secondary font-outfit text-[20px] text-primary px-2 py-1 rounded-lg ml-1`}>Shop now <FaArrowRight className='ml-2'/></button>
          </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.paddingY} px-6 sm:pr-6 sm:px-1`}>
        <div className='bg-white w-[30em] sm:h-[40em] h-[30em] p-[24px] z-1'>
            <div className={`${styles.flexCenter} w-[100%] h-[100%] bg-primary z-1`}>
              <img src={hero} alt='hero-picture' className='z-5 absolute sm:w-[560px] sm:h-[652px] w-[350px] h-[452px]  md:right-40 md:bottom-0.5'/>
            </div>
        </div>
      </div>
    </section>
    <span className='lg:inline-block hidden font-outfit font-bold md:text-[200px] text-[90px] title text-dimWhite opacity-[50%] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]'>
         BEST SELLER
      </span>
    </div>
  )
}

export default Hero