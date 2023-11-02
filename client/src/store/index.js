import {createStore, combineReducers} from "redux";
import {numberReducer} from "./numberReducer";
import {setReducer} from "./setReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    number: numberReducer,
    set: setReducer
})

export const store = createStore(rootReducer, composeWithDevTools())