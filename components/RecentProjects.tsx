import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'



const RecentProjects = () => {
  return (
    <div className=' text-white-100 py-20' id='projects'>
       <h1 className=' heading'>
            A Small selection of {' '}
            <span className=' text-purple'>Recent Projects</span>
       </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-7 mt-10 p-4'>
            {projects.map(({id, title, des, img, iconLists, link})=>(
                <div key={id}
                    className=' sm:h-[41rem] sm:w-[470px] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className=' relative flex items-center justify-center sm:w-[400px] w-[80vw] sm:h-[40vh] h-[30vh] overflow-hidden lg:h-[50vh]'>
                            <div className=' relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img src={img} alt={title} className={` ${id===1 && ' w-[30rem] h-[25rem] px-[0.25rem] pt-[2rem] top-0.5 -translate-y-2 translate-x-2  rotate-3 rounded-md'},${id===2 && ' translate-y-4 rotate-3'},${id===3 && ' rotate-3'} ,${id===4 && ' w-[30rem] px-[0.25rem] pt-[0.5rem] top-0.5 -translate-y-3 translate-x-4  rotate-6 rounded-md'} ,z-10 absolute bottom-0`} />
                        </div>
                        <h1 className=' font-bold lg:text-2xl md:text-xl text-base line-clamp-1 my-[1rem] text-white'>{title}</h1>
                        <p className=' lg:text-xl lg:font-normal font-light  text-sm line-cramp-2'>{des}</p>
                        <div className=' flex items-center justify-between mt-7 mb-3'>
                            <div className=' flex items-center'>
                                {iconLists.map((icon,index)=>(
                                    <div key={icon} className={`flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 h-8 w-8 gap-1 `}
                                         style={ { transform: `translateX(-${5*index*2}px)`}}>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className=' flex justify-center items-center text-sm'>
                                <p className=' flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow className=' ms-3'
                                    color='#cbacf9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects