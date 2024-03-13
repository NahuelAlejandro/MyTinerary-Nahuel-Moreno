import React, { useEffect, useState } from 'react'
import LayoutMain from './LayoutMain'
import { Link, useParams } from 'react-router-dom'
import { getCity } from '../sevice/citiesQueries'

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
            <main className='grow flex flex-col gap-5 justify-center items-center bg-gray-500 py-10'>
                {city.name != undefined ? <img className=' h-52 rounded border-2 border-sky-800 md:h-96' src={`${city.image}`} alt={`${city.name}`} /> :"" }
                {city.name != undefined ?<h2 className='text-2xl font font-semibold '>{city.name}</h2> : <h2 className='text-3xl font font-semibold md:text-7xl'>City is not available</h2> }
                <h3 className='font-semibold text-4xl md:text-5xl'>Under construction</h3>
                <Link className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-xl' to="/Cities">Go to cities</Link>                        
            </main>
        </LayoutMain> 
    </>
  )
}

export default City;