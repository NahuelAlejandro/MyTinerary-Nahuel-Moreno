import React from 'react'
import {Link} from "react-router-dom"

const CitiesCards = ({city}) => {

  

  return (
          <Link className='w-full h-48 relative overflow-hidden border-2 border-sky-600 rounded cursor-pointer md:h-80 md:w-[30%] lg:h-96 duration-500 transition-all group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100' to={`/cities/${city._id}`}>
            <article className='h-full w-full' id={city._id} >
                <span className='h-full w-full absolute z-10'></span>
                <img className='w-full h-full object-cover' src={`${city.image}`} alt={`${city.name}`}/>
                <footer className='bg-black/55 w-full absolute bottom-0 flex flex-col items-center font-semibold '>
                    <h2 className='text-sky-300 '>{city.country}</h2>
                    <h2 className='text-sky-200 '>{city.name}</h2>
                </footer>
            </article>
          </Link>
  )
}

export default CitiesCards