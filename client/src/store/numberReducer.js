import {createSlice} from "@reduxjs/toolkit";

export const numberSlicer = createSlice({
    name: "number",
    initialState: {
        number: 0
    },
    reducers: {
        INCREASE(state, action) {
            state.number = state.number + action.payload
        },
        DECREASE(state, action) {
            state.number = state.number - action.payload
        }
    }
})

export const {INCREASE,DECREASE} = numberSlicer.actions
export default numberSlicer.reducer

/*
const defaultState = {
    number:0
}
export const numberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {...state, number: state.number + action.payload}
        case "DECREASE":
            return {...state, number: state.number - action.payload}
        default:
            return state
    }
}*/
