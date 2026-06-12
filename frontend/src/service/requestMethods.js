import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://royalwatches-backend.onrender.com/api/";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({ baseURL: BASE_URL });

// Read the token fresh on every request so it's never stale after login
userRequest.interceptors.request.use((config) => {
  try {
    const persisted = JSON.parse(localStorage.getItem("persist:root") || "{}");
    const token = persisted.user && JSON.parse(persisted.user).currentUser?.token;
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
  } catch {
    // localStorage unavailable or malformed — proceed unauthenticated
  }
  return config;
});
