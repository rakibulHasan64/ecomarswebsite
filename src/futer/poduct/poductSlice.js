import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
 products: [],
  isLoading: false,
  isError: false,
  error: null,
  
};




const produtSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductFavorite: (state, action) => {
      state.products = action.payload;
    }

    
  },


});

export default produtSlice.reducer;

export const { getProducts,updateProductFavorite} = produtSlice.actions;