import React from 'react'
import { BestDealsImages } from '../constants'
const Deals = () => {
  return (
    <section id='deal' className='grid md:grid-cols-3 grid-cols-2 justify-between justify-items-center gap-y-2 px-6'>
    {BestDealsImages.map((Images,index)=>(
      <div className='flex flex-col justify-center items-center'>
      <img className='h-[80%] w-full object-cover rounded-lg' src={Images.image}/>
      <span className='relative h-[0px] bottom-20 sm:block hidden text-[35px] text-bold font-outfit text-dimWhite opacity-[50%] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]'>50% OFF</span>
      </div>
    ))}
  </section>
  )
}

export default Deals