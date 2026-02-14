import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/SearchSlice.js";
import cartReducer from "../features/CartSlice.js";
import authReducer from "../features/AuthSlice.js";
import categoriesReducer from "../features/CategorySlice.js";

/**
 * Redux store configuration
 * Combines all feature slices into a single store
 */
export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    auth: authReducer,
    categories: categoriesReducer, // Updated to match slice name
  },
});
