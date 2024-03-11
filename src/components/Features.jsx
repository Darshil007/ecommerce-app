import React from 'react'
import { features } from '../constants';
import styles from '../style';
const Features = () => {
  return (
    <div id='features' className={`grid sm:grid-cols-4 grid-cols-2 px-1 justify-center justify-items-center  ${styles.paddingY}`}>
      {features.map((feature,index)=>(
        <div className='flex justify-evenly items-center flex-col'>
           <feature.icon className='w-[50px] h-[50px] mb-4'/>
           <span className='font-outfit font-bold text-[20px] py-3'>{feature.Header}</span>
           <span className='sm:block hidden font-outfit font-semibold text-[14px]'>{feature.description}</span>
        </div>
      ))}
    </div>
  )
}

export default Features