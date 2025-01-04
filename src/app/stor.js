import { configureStore } from "@reduxjs/toolkit";
import produtSlice from "../futer/poduct/poductSlice"
import authSlice from '../page/dasbord/auths/authSlice'
import categoriesSlice from "../futer/catagory/catagorySlice"

import cartSlice from "../page/dasbord/cart/cartSlice"
const store = configureStore({
  reducer: {
    products: produtSlice,
    categories: categoriesSlice,
    auth: authSlice,
    carts: cartSlice,
  },
});

export default store;  