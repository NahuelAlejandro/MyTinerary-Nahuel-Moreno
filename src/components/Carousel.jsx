import CarouselItem from "./CarouselItem"


const Carousel =({popularCities})=>{
    
    return(

        <div className="flex flex-wrap justify-around gap-3 md:gap-6 w-11/12">
            <CarouselItem city={popularCities[0]}/>
            <CarouselItem city={popularCities[1]}/>
            <CarouselItem city={popularCities[2]}/>
            <CarouselItem city={popularCities[3]}/>
        </div>

    )
}

export default Carousel