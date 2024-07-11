import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((product) => product._id === productId);
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.quantity -= 1;
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product._id === id);
      if (product) {
        state.total -= product.price * product.quantity;
        product.quantity = quantity;
        state.total += product.price * product.quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
