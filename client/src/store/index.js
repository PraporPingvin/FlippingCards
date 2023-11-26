import {combineReducers, configureStore} from "@reduxjs/toolkit";
import numberSlicer from "./numberReducer";
import setSlice from "./setReducer";
import cardSlice from "./cardReducer";
// import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    number: numberSlicer,
    set: setSlice,
    card: cardSlice
})

export const store = configureStore({
    reducer: rootReducer
    //     {
    //     number: numberSlicer.reducer,
    //     set: setSlice.reducer
    // }
})