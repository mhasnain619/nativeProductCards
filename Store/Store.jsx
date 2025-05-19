import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slices/CounterSlice'
import cartReducer from './Slices/AddToCartSlice'
import allProducts from './Slices/ProductSlice';

const store = configureStore({
    reducer: {
        cartReducer,
        counterReducer,
    }
})

export default store