
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
}