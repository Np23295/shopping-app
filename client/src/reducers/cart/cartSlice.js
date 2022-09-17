import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartStore: (state, action) => {
            return [...state, action.payload]
        },
        clearCart: (state) => {
            return initialState;
        },
        removeFromCartStore: (state, action) => {
            return state.filter(product => {
                return product._id !== action.payload;
              });
        },
        updateCartQuantity: (state, action) => {
            state.map(product => {
                if (action.payload._id === product._id) {
                    product.purchaseQuantity = action.payload.purchaseQuantity;
                }
                return product;
            });
        },
        addMultipleToCart: (state, action) => {
            return [...state, ...action.payload.products];
        }
    }
});

export const { addToCartStore, clearCart, removeFromCartStore, updateCartQuantity, addMultipleToCart } = cartSlice.actions;

export default cartSlice.reducer;