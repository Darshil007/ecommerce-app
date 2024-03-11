import React from 'react'
import { CategoryImage } from '../constants'
const Shop = () => {
  return (
    <section id='shop' className='grid sm:grid-cols-3 justify-center justify-items-center bg-primary'>
      {CategoryImage.map((image,index)=>(
        <div className='flex flex-col justify-evenly items-center sm:px-10 sm:pt-8 p-6'>
        <img className='h-[80%] w-full object-fit' src={image.category}/>
        <div className='font-outfit font-semibold text-[20px] pt-6'>{image.title}</div>
        </div>
      ))}
    </section>
  )
}

export default Shop