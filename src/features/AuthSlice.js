import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

/**
 * Auth slice - manages authentication state
 * Following industry-standard naming: authSlice (camelCase)
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Login user and persist to localStorage
     */
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    /**
     * Logout user and clear localStorage
     */
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

// Export reducer
export default authSlice.reducer;
