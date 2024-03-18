import { createReducer } from "@reduxjs/toolkit";
import { loadCities, filterCities, changeSearch } from"../actions/citiesActions"
const intialState = {
    cities: [],
    filteredCities: [],
    search: ""
}

export const citiesReducer = createReducer( intialState, (builder)=> {
    builder.addCase(loadCities,( state, action )=>{
        return {
            ...state,
            cities: action.payload,
            filteredCities:action.payload
        }
    }).addCase(changeSearch, (state, action)=>{
        return {
            ...state,
            search: action.payload
        }
    }).addCase(filterCities, (state, action )=>{
        const aux = state.cities.filter((city) => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()) )
       
        return {
            ...state,
            filteredCities:aux
        }
    })
})

export default citiesReducer;