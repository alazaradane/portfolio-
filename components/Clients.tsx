import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from '@/data'


const Clients = () => {
  return (
    <div className=' text-white-100 py-20' id='testimonials'>
       <h1 className=' heading'>
            Kind words from {' '}
            <span className=' text-purple'>Satistfied clients</span>
       </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-7 mt-10 p-4 max-lg:mt-10'>        
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
                <div className=' flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                  {companies.map(({id,img,name,nameImg})=>(
                    <div key={id} className=' flex md:max-w-60 max-w-32 gap-2 '>
                      <img src={img} alt={name} className=' w-5 md:w-10'/>
                      <img src={nameImg} alt={name} className=' w-20 md:w-24'/>
                    </div>
                  ))}
                </div>
        </div>
    </div>
  )
}

export default Clients