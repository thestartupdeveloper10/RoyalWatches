import { createSlice } from "@reduxjs/toolkit";


const  initialState = {
    products: [],
    quantity: 0,
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        addProductWishlist: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
        },
        removeProductWishlist: (state, action) => {
            const productId = action.payload;
            const productIndex = state.products.findIndex((product) => product._id === productId);
            if (productIndex !== -1) {
                state.quantity -= 1;
                state.products.splice(productIndex, 1);
            }
    },
    }
})

export const { addProductWishlist, removeProductWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;