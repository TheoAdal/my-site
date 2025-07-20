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
      const user = action.payload.user;
      state.user = {
        id: user.id || user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
      localStorage.setItem("access_token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("access_token");
    },
    setUser: (state, action) => {
      const user = action.payload; 
      state.user = {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      };
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
