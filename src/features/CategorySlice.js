import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/catalog/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          limit: 1000,
          per_page: 1000,
          page_size: 1000,
          all: true,
          paginate: false,
        },
      });

      if (Array.isArray(response.data)) {
        return response.data;
      } else if (response.data && Array.isArray(response.data.data)) {
        return response.data.data;
      } else if (response.data && Array.isArray(response.data.categories)) {
        return response.data.categories;
      } else {
        return [];
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch categories";
      return rejectWithValue(errorMessage);
    }
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    error: null,
    lastFetched: null,
  },
  reducers: {
    clearCategories: (state) => {
      state.items = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.lastFetched = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "An error occurred while fetching categories";
        state.items = [];
      });
  },
});

export const { clearCategories, clearError } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories.items;
export const selectCategoriesLoading = (state) => state.categories.loading;
export const selectCategoriesError = (state) => state.categories.error;

export default categoriesSlice.reducer;
