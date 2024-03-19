import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";

export default configureStore({
    reducer:{
        citiesStore: citiesReducer
    }
})