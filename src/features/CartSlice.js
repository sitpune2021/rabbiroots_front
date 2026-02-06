import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

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

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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

    removeFromCart: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    openCart: (state) => {
      state.isCartOpen = true;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = CartSlice.actions;

export default CartSlice.reducer;
