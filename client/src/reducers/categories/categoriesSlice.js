import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategories: (state, action) => {
            return [...action.payload]
        },
    }
});

export const { updateCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;