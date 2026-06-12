import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { userId } = action.payload;
      if (!state.carts[userId]) {
        state.carts[userId] = { products: [], quantity: 0, total: 0 };
      }
      // Deduplicate: if product already in cart, increment its quantity
      const existingIndex = state.carts[userId].products.findIndex(
        (p) => p._id === action.payload._id
      );
      if (existingIndex !== -1) {
        const existing = state.carts[userId].products[existingIndex];
        state.carts[userId].total += action.payload.price * action.payload.quantity;
        existing.quantity += action.payload.quantity;
      } else {
        state.carts[userId].quantity += 1;
        state.carts[userId].products.push(action.payload);
        state.carts[userId].total += action.payload.price * action.payload.quantity;
      }
    },
    removeProduct: (state, action) => {
      const { userId, productId } = action.payload;
      if (state.carts[userId]) {
        const productIndex = state.carts[userId].products.findIndex(
          (p) => p._id === productId
        );
        if (productIndex !== -1) {
          const product = state.carts[userId].products[productIndex];
          state.carts[userId].quantity -= 1;
          state.carts[userId].total -= product.price * product.quantity;
          state.carts[userId].products.splice(productIndex, 1);
        }
      }
    },
    updateProductQuantity: (state, action) => {
      const { userId, productId, quantity } = action.payload;
      if (state.carts[userId]) {
        const product = state.carts[userId].products.find(
          (p) => p._id === productId
        );
        if (product) {
          state.carts[userId].total -= product.price * product.quantity;
          product.quantity = quantity;
          state.carts[userId].total += product.price * product.quantity;
        }
      }
    },
  },
});

export const { addProduct, removeProduct, updateProductQuantity } = cartSlice.actions;

export const selectCartItems = (state, userId) =>
  state.cart.carts[userId] || { products: [], quantity: 0, total: 0 };

export default cartSlice.reducer;
