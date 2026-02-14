import { createSlice } from "@reduxjs/toolkit";

/**
 * Load cart items from localStorage
 */
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

/**
 * Save cart items to localStorage
 */
const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(items));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const initialState = {
  items: loadCartFromStorage(),
  isCartOpen: false,
};

/**
 * Cart slice - manages shopping cart state
 * Following industry-standard naming: cartSlice (camelCase)
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Add item to cart or increment quantity if already exists
     */
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },

    /**
     * Remove item from cart or decrement quantity
     */
    removeFromCart: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      saveCartToStorage(state.items);
    },

    /**
     * Clear all items from cart
     */
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    /**
     * Toggle cart open/closed
     */
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    /**
     * Open cart
     */
    openCart: (state) => {
      state.isCartOpen = true;
    },

    /**
     * Close cart
     */
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

// Export selectors
export const selectCartItems = (state) => state.cart.items;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

// Export reducer
export default cartSlice.reducer;
