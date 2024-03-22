import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import userReducer from "./reducers/usersReducer";

export default configureStore({
    reducer:{
        citiesStore: citiesReducer,
        users: userReducer
    }
})