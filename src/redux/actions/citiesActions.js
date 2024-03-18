import { createAction } from "@reduxjs/toolkit";

export const loadCities = createAction("loadCities", (cities) => {
    return {
        payload: cities
    }
})

export const changeSearch = createAction("changeSearch", (newSearch) => {
    return {
        payload: newSearch
    }
})

export const filterCities = createAction("filterCities", (value)=>{
    return {
        payload: value
    }
})