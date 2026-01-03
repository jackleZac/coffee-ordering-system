import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./handleCart/CartSlice";
import AuthReducer from "./auth/AuthSlice";

export const store = configureStore({
    reducer: {
        AuthSliceName: AuthReducer,
        CartSliceName: CartReducer,
    }
})