import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
   name: "carts",
   initialState: {
      carts: [],

   },
   reducers: {
       getCarts: (state, action) => {
         state.carts = action.payload;

         
       },
      //  addCarts: (state, action) => {

      //   },
      //  updateCarts: (state, action) => { },
      //    daleteCarts: (state,action)=>{},
   },
});

export default cartSlice.reducer;
export const {  getCarts } = cartSlice.actions;