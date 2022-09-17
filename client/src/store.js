import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart/cartSlice';
import cartOpenReducer from './reducers/cartOpen/cartOpenSlice';
import categoriesSlice from './reducers/categories/categoriesSlice';
import currentCategorySlice from './reducers/currentCategory/currentCategorySlice';
import productSlice from './reducers/products/productSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    cartOpen: cartOpenReducer,
    products: productSlice,
    currentCategory: currentCategorySlice,
    categories: categoriesSlice
  }
});