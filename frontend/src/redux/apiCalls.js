import {
  loginFailure, loginStart, loginSuccess, resetError,
  registerStart, registerSuccess, registerFailure,
} from "./userRedux";
import { publicRequest } from "../service/requestMethods";

export const login = async (dispatch, user) => {
  dispatch(resetError());
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response?.data?.error || "Something went wrong. Please try again."));
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure(err.response?.data?.error || "Registration failed. Please try again."));
  }
};
