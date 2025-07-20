import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 


const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isAuthenticated"]
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    })
});

 const persistor = persistStore(store);

export { store, persistor };


