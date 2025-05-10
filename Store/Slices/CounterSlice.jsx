import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'Counter App',
    initialState,
    reducers: {
        addCounter: (state, payload) => {
            state.counter == ++state.counter
        },
        delCounter: (state, payload) => {
            state.counter == --state.counter
        }
    }
})

const { reducer, actions } = counterSlice

export const { addCounter, delCounter } = actions

export default reducer