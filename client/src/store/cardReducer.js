import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        cards: []
    },
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        setCard(state, action) {
            state.cards = action.payload
        }
    }
})
export const {addCard, setCard} = cardSlice.actions
export default cardSlice.reducer
