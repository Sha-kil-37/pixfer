import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage for web
// Your API slice
import { combineReducers } from "redux";
import searchValue from "../slices/searchValueSlice/searchValueSlice.js";
import { productsApi } from "../slices/apiSlice/productsApiSlice.js";
import productCartListSlice from "../slices/productCartSlice/productCartListSlice.js";
// Combine reducers
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer, // RTK Query API slice
  searchValue: searchValue,
  productCartList: productCartListSlice,
  // Add the new slice here

  // Add other reducers here if needed
});

// Setup redux-persist
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // For redux-persist compatibility
    }).concat(productsApi.middleware), // Add RTK Query 
});

setupListeners(store.dispatch);
// 
export const persistor = persistStore(store);
