import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, titleClassName, description, className, img, imgClassName, spareImg})=>(
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    spareImg={spareImg}
                    titleClassName={titleClassName}/>
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid