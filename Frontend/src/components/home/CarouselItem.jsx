import React from 'react'

const CarouselItem = ({image,title}) => {
  
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={image} className='w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center' alt="" />
        <span className='py-5 font-semibold text-xl text-gray-400'>{title}</span>
    </div>
  )
}

export default CarouselItem
