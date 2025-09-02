import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import themeReducer from "./themeSlice.js";
import resturantSlice from "./resturantSlice.js";
import menuSlice from "./menuSlice.js";
import cartSlice from "./cartSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    rest: resturantSlice,
    menu: menuSlice,
    carts: cartSlice
  },
});

export default store;
