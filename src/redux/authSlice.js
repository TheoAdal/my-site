import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("access_token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!token,
    token: token || null,
    user: null, // Optional: store user info
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("access_token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("access_token");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
