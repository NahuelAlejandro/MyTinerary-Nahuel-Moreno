import React from 'react'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full h-[400px] lg:h-[700px] flex flex-col overflow-hidden  items-center">
        <img className="w-full object-cover h-full" src="/hero-airplane.jpg" alt="airplane"/>
        <h2 className="absolute  text-3xl font-bold lg:text-5xl md:top-2 lg:top-6 text-sky-100">MyTinerary</h2>
        <Link className=' absolute bottom-16 px-2 py-1 bg-sky-600 hover:bg-sky-400 hover:scale-110 hover:animate-none text-white rounded-md border border-black md:bottom-4 lg:bottom-10 motion-safe:animate-bounce lg:text-xl' to="/Cities"> Choose your city</Link>
        <p className="absolute bottom-0 pb-2 px-2 text-sky-200 bg-black/60 backdrop-blur-[2px] md:rounded-md md:px-2 md:pb-0 md:bottom-16 lg-2 lg:bottom-32 lg:text-2xl">Find your perfect trip, designed by insiders who know and love their cities!</p>
    </section>
  )
}
export default Hero;
