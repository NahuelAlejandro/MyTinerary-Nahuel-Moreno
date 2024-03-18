import { useEffect, useRef } from "react";
import { getCities } from "../sevice/citiesQueries";
import LayoutMain from "./LayoutMain";
import CitiesCards from "../components/CitiesCards";
import { useDispatch, useSelector } from "react-redux";
import {changeSearch, loadCities, filterCities} from "../redux/actions/citiesActions"



const Cities = ()=>{
    
    const searchInput = useRef(null)
    const dispatch = useDispatch();

   const search = useSelector((store)=> store.citiesStore.search);
   const loadAllCities = useSelector((store)=> store.citiesStore.cities);
   const filteredCity= useSelector((store)=>store.citiesStore.filteredCities)
   

    useEffect(()=>{
        if(loadAllCities == 0){
            getCities().then(response => dispatch(loadCities(response.data)))
        }
        
    },[])
    

    const handleInput = () =>{
    
    dispatch(changeSearch(searchInput.current.value))
    dispatch(filterCities( searchInput.current.value))
     
   
     
    }
   


    return(
        <>
            <LayoutMain>
            <main className=" grow w-full flex flex-col items-center bg-gray-500">
                <section className="w-[90%] flex flex-col items-center gap-5 py-5">
                    <h2 className=" font-semibold text-sky-300 text-5xl">Cities</h2>
                    <input type="text" className="outline-none border-2 border-sky-600 shadow-md shadow-sky-300 rounded w-3/4 md:w-2/4 lg:w-2/5 lg:h-8 font-semibold indent-3 text-lg lg:text-2xl" placeholder="Search For Cities ..." name="inputSearch" onInput={handleInput} ref={searchInput} defaultValue={search}/>
                    <div className="w-full flex gap-5 flex-wrap justify-center group ">     
                        {filteredCity.length > 0 ?filteredCity.map(city => <CitiesCards key={city._id} city={city}/>):<p className="text-sky-300 text-5xl pt-14">Sorry, we can't find any cities that include "{search}"</p>}
                    </div> 
                </section>
            </main>     
            </LayoutMain>
        </>
    )
}

export default Cities;