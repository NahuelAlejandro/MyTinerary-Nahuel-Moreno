import React, { useEffect, useState } from 'react'
import LayoutMain from './LayoutMain'
import { Link, useParams } from 'react-router-dom'
import { getCity, getItineraries } from '../sevice/citiesQueries'
import Itineraries from '../components/Itineraries'

const City = () => {

    const cityId =useParams();

    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        
        getCity(cityId.id).then((response) => {
            if(response.data){
            setCity(response.data);
        }else{
           
        }
    })       
        .finally(()=> setLoading(false));

    },[])
    const [cityItinerary, setCityItinerary] = useState([]);

    useEffect(()=>{
        getItineraries(cityId.id).then((response)=>{
            setCityItinerary(response.data)
        })
       
    },[]) 
   

    
        if(loading){
            return(
                <>
                    <LayoutMain>
                        <main className='grow flex gap-5 justify-center items-center bg-gray-500'>   
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 md:h-10 md:w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className='font-semibold text-2xl md:text-5xl'> Loading...</p>
                                
                        </main>
                    </LayoutMain> 
                </>
                )
            }     
  
        

  return (
    <>
        <LayoutMain>
            <div className='grow flex flex-col gap-4 justify-center items-center bg-gray-500 py-10 '>
                <main className=' w-11/12 flex flex-col gap-5 '>
                    <section className='flex flex-col gap-5 justify-center items-center '>
                        {city.name != undefined ? <h2 className='text-2xl lg:text-5xl font font-semibold '>{city.name}</h2> : <h2 className='text-3xl font font-semibold md:text-7xl'>City is not available</h2> }
                        {city.name != undefined ? <img className=' w-60 rounded border-2 border-sky-600 md:w-96 lg:w-2/3 lg:h-[570px]' src={`${city.image}`} alt={`${city.name}`} /> :"" }
                    </section>
                    <section className='flex flex-col items-center gap-5 w-full'>
                        {cityItinerary ?<h3 className='font-semibold text-2xl md:text-5xl'>Itineraries</h3>:""}
                        <div className='w-full flex flex-col gap-5 items-center lg:items-stretch lg:flex-row lg:justify-around'>
                            {cityItinerary ? cityItinerary.length == [] ?<p className='font-semibold text-xl lg:text-3xl'>"Sorry, There are no itineraries available for this city"</p>:cityItinerary.map(itinerary=> <Itineraries key={itinerary._id} itinerary={itinerary}/>):""}
                        </div>
                    </section>
                        
                </main>
                        <Link className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-xl' to="/Cities">Go to cities</Link>                        
            </div>
        </LayoutMain> 
    </>
  )
}

export default City;