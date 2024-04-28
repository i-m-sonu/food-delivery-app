import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'; // Importing 'thunk' as a named export


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    middleware: [thunk, logger]
  },
});

export default store;
