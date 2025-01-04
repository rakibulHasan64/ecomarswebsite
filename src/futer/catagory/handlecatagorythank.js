const handleAsyncThunk = (builder, asyncThunk, stateKey = "posts") => {
    builder
    .addCase(asyncThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.type === "categories/getCategories/fulfilled") {
        state.categories = action.payload;  // Fixed the typo: 'catagories' -> 'categories'
      }

      if (action.type === "categories/deleteCategories/fulfilled") {
        const categoryIndex = state.categories.findIndex(item => item.id === action.payload);
        if (categoryIndex !== -1) {
          state.categories.splice(categoryIndex, 1);  // Correctly modifying state.categories
        }
      }
      
    })
    .addCase(asyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
    });
};

export { handleAsyncThunk };