import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const cartOpenSlice = createSlice({
    name: 'cartOpen',
    initialState,
    reducers: {
        toogleCart: (state) => {
            return !state; 
        },
    }
});

export const { toogleCart } = cartOpenSlice.actions;

export default cartOpenSlice.reducer;