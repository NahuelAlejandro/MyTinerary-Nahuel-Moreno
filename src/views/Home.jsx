import Carousel from "../components/Carousel";
import LayoutMain from "./LayoutMain";
import {cities} from "../data/data"
import { useEffect, useState } from "react"
import Hero from "../components/Hero";
const Home = ()=>{
   
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(4)

    const popularCities = cities.slice(0, 12)

    const city = popularCities.slice(start, end)
    let[slide, setSlide] = useState(0)
    
    
    
    const next = () => {

        setStart (start + 4); 
        setEnd (end + 4); 
        setSlide(slide + 1)

        if (slide == 2){
            setStart (start = 0); 
            setEnd (end = 4)
            setSlide(slide = 0); 
        }
    
    } 
  
    
    const prev = () => {
        setStart (start - 4); 
        setEnd (end - 4); 
        setSlide(slide - 1)

        if (slide == 0){
            setStart (start = 8); 
            setEnd (end = 12)
            setSlide(slide = 2); 
        }
    }
    
    useEffect(()=>{
       
       const timeOut = setTimeout(next, 3500) 
       
       return ()=>clearTimeout(timeOut)
       
    },[next])
   
    return(
        <>
        <LayoutMain>
            <main className=" grow w-full flex flex-col bg-gray-500">               
                    <Hero/>
                    <section className="w-full flex flex-col items-center relative py-10 lg:py-14">
                        <h3 className="absolute top-2 lg:top-2 lg:text-3xl font-semibold text-sky-300">Popular MyTineraries!</h3>
                        <div className=" w-full flex justify-center gap-4 flex-wrap md:flex-nowrap md:wr md:flex-row md:gap-1 items-center ">
                        <button className="h-full  w-8 lg:w-10 md:px-1 rotate-180 order-2 md:order-first text-center "  onClick={prev}><svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"/></svg></button>
                        <Carousel popularCities={city}/>
                        <button className="h-full w-8 lg:w-10 md:px-1 order-3" onClick={next}><svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"/></svg></button>
                        </div>
                    </section>
            </main>    
        </LayoutMain>
        </>
    )
}

export default Home;