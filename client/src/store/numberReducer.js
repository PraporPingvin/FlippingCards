import {store} from "./index";

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
}
