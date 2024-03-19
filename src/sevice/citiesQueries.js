import axios from 'axios'

export const getCities = async () => {
    try {
    const response = await axios("http://localhost:4000/api/cities");
    return response.data ;
} catch (error) {

    return [];
}
}

export const getCity = async (id) => {
    try {
    const response = await axios("http://localhost:4000/api/cities/" + id);
    return response.data ;
} catch (error) {

    return [];
}
}


export const getItineraries = async(id)=>{
    try {
        const response = await axios("http://localhost:4000/api/itineraries/city/" + id);
        return response.data;
    } catch (error) {
        return [];
    }
}
