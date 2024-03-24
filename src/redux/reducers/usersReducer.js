import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut, update } from "../actions/userActions";

const initialState = {
    user: {}
}
export const userReducer = createReducer(initialState, (builder)=>{
    builder.addCase(logIn, (state, action)=>{
        return {
            ...state, user: action.payload
        }
    })
    builder.addCase(logOut, ()=>{
        return initialState        
    })
    builder.addCase(update, (state, action)=>{
        const aux = {...action.payload}
        delete aux.token
        const newStore = Object.assign({},state.user, aux)
        return {
            ...state, user:newStore
        }
    })
})

export default userReducer;