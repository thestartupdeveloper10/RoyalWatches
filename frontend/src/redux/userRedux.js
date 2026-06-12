import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userId: null,
  isFetching: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.userId = action.payload.id;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload || "Login failed. Please try again.";
    },
    resetError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.currentUser = null;
      state.userId = null;
      state.error = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.userId = action.payload.id;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload || "Registration failed. Please try again.";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
  resetError,
} = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserId = (state) => state.user.userId;

export default userSlice.reducer;
