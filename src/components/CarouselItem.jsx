import React from 'react'



const CarouselItem = ({city}) => {
  return (
    <article className="w-[47%] h-64 lg:h-80 bg-white relative border-transparent overflow-hidden rounded-md">
        <img className=" w-full object-cover object-top h-full" src={`${city.image}`} alt={`${city.name}`} />
        <footer className="absolute object-cover bottom-0 w-full bg-black/65 backdrop-blur-[3px] text-white text-center">
        <h4 className='md:text-lg text-sm font-semibold text-sky-300'>{city.name}</h4>
        <span className='text-sky-200'>{city.country}</span>
        </footer>
    </article>
  )
}

export default CarouselItem