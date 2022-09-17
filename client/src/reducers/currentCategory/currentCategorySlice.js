import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const currentCategorySlice = createSlice({
    name: 'currentCategory',
    initialState,
    reducers: {
        updateCurrentCategory: (state, action) => {
            return action.payload
        },
    }
});

export const { updateCurrentCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;