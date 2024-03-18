import React from 'react'

const Itineraries = (itineraries) => {

  function price(price) {
    if( price <= 5){
      if(price <= 4){
        if(price <= 3){
          if(price <= 2){
            if(price == 1){
              return "💵"
            }
            return "💵💵"
          }
          return "💵💵💵"
        }
        return "💵💵💵💵"
      }
      return "💵💵💵💵💵"
    } 
  }
  // function price(price) {
  //   if ( price == 1){
  //     return "💵"
  //   } else if(price == 2){
  //     return "💵💵"
  //   } else if(price == 3){
  //     return "💵💵💵"
  //   } else if(price == 4){
  //     return "💵💵💵💵"
  //   } else if(price == 5){
  //     return "💵💵💵💵💵"
  //   }
  // }
    
 

  return (
    <article className='bg-black/40 rounded w-11/12  flex flex-col gap-2 border-2 border-sky-600 md:gap-4 p-2 xl:p-5 lg:w-5/12'>
      <h2 className='font-semibold text-2xl text-center text-sky-400 md:text-4xl lg:h-20'>{itineraries.itinerary.title}</h2>
     
      <article className='w-full flex justify-between md:justify-around items-center'>
        <article className='w-24 md:w-44 flex flex-col items-center'>
          <h3 className='font-semibold text-xl md:text-2xl text-sky-600'>Guide:</h3>
          <img className='w-full rounded-full border-2 border-sky-600' src={`${itineraries.itinerary.guide_image}`} alt={`image guide ${itineraries.itinerary.guide}`} />
          <h4 className='text-lg md:text-xl  text-white'>{itineraries.itinerary.guide}</h4>
        </article>
        <section className='flex flex-col gap-3'>
          <h3 className='text-xl md:text-2xl font-semibold text-sky-600'>Time: <span className='text-base  text-white font-normal'>{itineraries.itinerary.duration} hours</span></h3>
          <h3 className='text-xl md:text-2xl font-semibold text-sky-600'>Price: <span className='text-base  text-white font-normal'>{price(itineraries.itinerary.price)}</span></h3>
        </section>
      </article>
      <div className='w-full flex gap-3 flex-col items-center xl:flex-row xl:justify-center'>
        {itineraries.itinerary.activities.map(activity=> <img className='w-5/6 rounded  object-cover border-2 border-sky-600 md:h-60 xl:h-28 xl:w-40' src={`${activity}`} alt={`image of ${itineraries.itinerary.title}`} />)}
      </div> 
      <section className='flex flex-wrap justify-center gap-3'>
        {itineraries.itinerary.hashtags.map( hashtag=> <span className='px-2 py-1 rounded bg-sky-600 text-sky-200'>{hashtag}</span>)}
      </section>
      <h3 className='text-xl md:text-2xl font-semibold text-sky-600'>Description:</h3>
      <p className='text-lg  text-white'>{itineraries.itinerary.description}</p>
    </article>
  )
}

export default Itineraries;