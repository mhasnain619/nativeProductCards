import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    isLoading: false,
    isError: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemExist = state.cart.find(item => item.id === action.payload.id);
            if (itemExist) {
                itemExist.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                alert('Product Added')
            }
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateQuantity(state, action) {
            const { id, change } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
            }
        },
        clearCart(state) {
            state.cart = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
    }
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions;


export default cartSlice.reducer;