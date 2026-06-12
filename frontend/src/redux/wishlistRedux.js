import { createSlice } from "@reduxjs/toolkit";

// Schema matches cart: products are stored flat, not nested under { product: {...} }
const initialState = {
  wishlists: {},
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProductWishlist: (state, action) => {
      const { userId, ...product } = action.payload;
      if (!state.wishlists[userId]) {
        state.wishlists[userId] = { products: [], wishQuantity: 0 };
      }
      // Deduplicate
      const exists = state.wishlists[userId].products.some(
        (p) => p._id === product._id
      );
      if (!exists) {
        state.wishlists[userId].wishQuantity += 1;
        state.wishlists[userId].products.push(product);
      }
    },
    removeProductWishlist: (state, action) => {
      const { userId, productId } = action.payload;
      if (state.wishlists[userId]) {
        const index = state.wishlists[userId].products.findIndex(
          (p) => p._id === productId
        );
        if (index !== -1) {
          state.wishlists[userId].wishQuantity -= 1;
          state.wishlists[userId].products.splice(index, 1);
        }
      }
    },
    mergeGuestWishlist: (state, action) => {
      const { userId } = action.payload;
      const guestWishlist = state.wishlists['null'];
      if (!guestWishlist || guestWishlist.products.length === 0) return;
      if (!state.wishlists[userId]) {
        state.wishlists[userId] = { products: [], wishQuantity: 0 };
      }
      for (const guestProduct of guestWishlist.products) {
        const exists = state.wishlists[userId].products.some(
          (p) => p._id === guestProduct._id
        );
        if (!exists) {
          state.wishlists[userId].products.push(guestProduct);
          state.wishlists[userId].wishQuantity += 1;
        }
      }
      delete state.wishlists['null'];
    },
  },
});

export const { addProductWishlist, removeProductWishlist, mergeGuestWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state, userId) =>
  state.wishlist.wishlists[userId] || { products: [], wishQuantity: 0 };

export default wishlistSlice.reducer;
