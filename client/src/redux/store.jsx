import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./handleCart/CartSlice";

export const store = configureStore({
    reducer: {
        CartSliceName: CartReducer,
    }
})