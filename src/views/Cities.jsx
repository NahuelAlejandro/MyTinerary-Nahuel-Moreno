import { useEffect, useRef, useState } from "react";
import { getCities } from "../sevice/citiesQueries";
import LayoutMain from "./LayoutMain";
import CitiesCards from "../components/CitiesCards";



const Cities = ()=>{

    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])

    useEffect(()=>{
        getCities().then(response => setCities(response.data))
        getCities().then(response => setFilteredCities(response.data))
    },[])
    
    const searchInput = useRef(null)
    

    const handleInput = () =>{
      const aux = filterCities(cities, searchInput.current.value)
      setFilteredCities( aux )
    }
   
  const filterCities = (citiesList, value) => citiesList.filter((city) => city.name.toLowerCase().startsWith(value.toLowerCase().trim()) )

  

    return(
        <>
            <LayoutMain>
            <main className=" grow w-full flex flex-col items-center bg-gray-500">
                <section className="w-[90%] flex flex-col items-center gap-5 py-5">
                    <h2 className=" font-semibold text-sky-300 text-5xl">Cities</h2>
                    <input type="text" className="outline-none border-2 border-sky-600 shadow-md shadow-sky-300 rounded w-3/4 md:w-2/4 lg:w-2/5 lg:h-8 font-semibold indent-3 text-lg lg:text-2xl" placeholder="Search For Cities ..." name="inputSearch" onInput={handleInput} ref={searchInput}/>
                    <div className="w-full flex gap-5 flex-wrap justify-center group ">     
                        {filteredCities.length > 0 ?filteredCities.map(city => <CitiesCards key={city._id} city={city}/>):<p className="text-sky-300 text-5xl pt-14">Sorry not found results</p>}
                    </div> 
                </section>
            </main>     
            </LayoutMain>
        </>
    )
}

export default Cities;