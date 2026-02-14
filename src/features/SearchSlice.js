import { createSlice } from "@reduxjs/toolkit";
import { createUnifiedProducts } from "../Data/ProductsItems.js";

const allProducts = createUnifiedProducts();

const initialState = {
  term: "",
  items: [],
};

/**
 * Search slice - manages product search functionality
 * Following industry-standard naming: searchSlice (camelCase)
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    /**
     * Set search term and filter products
     */
    setSearch: (state, action) => {
      state.term = action.payload.toLowerCase();
      if (state.term.trim() === "") {
        state.items = [];
      } else {
        state.items = allProducts.filter((item) =>
          item.name.toLowerCase().includes(state.term),
        );
      }
    },
    /**
     * Clear search term and results
     */
    clearSearch: (state) => {
      state.term = "";
      state.items = [];
    },
  },
});

// Export actions
export const { setSearch, clearSearch } = searchSlice.actions;

// Export selectors
export const selectSearchTerm = (state) => state.search.term;
export const selectSearchResults = (state) => state.search.items;

// Export reducer
export default searchSlice.reducer;
