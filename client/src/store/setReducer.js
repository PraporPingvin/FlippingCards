import {createSlice} from "@reduxjs/toolkit";

const setSlice = createSlice({
    name: "set",
    initialState: {
        sets: []
    },
    reducers: {
        addSet(state, action) {
            state.sets.push(action.payload)
        },
        setSets(state, action) {
            state.sets = action.payload
        }
    }
})
export const {addSet,setSets} = setSlice.actions
export default setSlice.reducer

/*
const defaultState = {
    sets:[]
}
export const setReducer = (state = defaultState,action)=>{
    switch (action.type){
        case "ADD_SET":
            return{...state, sets:[...state.sets, action.payload]}
        case "SET_SETS":
            return {...state,sets:[action.payload]}
        default:
            return state
    }
}*/