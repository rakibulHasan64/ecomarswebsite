import {  createSlice } from "@reduxjs/toolkit";



const initialState = {
     isLogine: false,
     user: null
}

// const setLogineUserDatato = createAsyncThunk("auth/logineuser", async (data) => {
//      return data
// })

const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          setLogineUserDatato: (state, action) => {
               state.isLogine = true;
               state.user = action.payload;
          }
     },
     
     
});
export default authSlice.reducer;
 export const { setLogineUserDatato  } = authSlice.actions;