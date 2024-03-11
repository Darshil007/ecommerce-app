import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
const Testimonials = () => {
  return (
    <>
     <div className={`${styles.flexCenter} pt-6 text-[45px] font-outfit pt-6 text-[45px] font-outfit font-semibold pb-4 drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.4)]`}>
        <span>Testimonials</span>
      </div>
    <section className='grid md:grid-cols-3 justify-between justify-items-center gap-x-3 px-6 py-8'>
      {feedback.map((people,index)=>(
        <div className={`flex-col ${styles.flexCenter} w-[100%] h-[100%] bg-white border-solid border-black border-1.5 p-4 rounded-xl drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.2)]`}>
           <img src={people.img} alt="customer's Img"/>
           <h3 className='font-outfit text-[20px] text-bold py-1'>{people.name}</h3>
           <p className='font-outfit text-[15px] text-semibold py-1'>{people.title}</p>
           <p className='font-outfit text-center py-1'>{people.content}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Testimonials