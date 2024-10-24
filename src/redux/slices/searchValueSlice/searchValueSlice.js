import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the input value
const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the action so that components can dispatch it
export const { setSearchValue } = searchValueSlice.actions;

// Export the reducer to include it in the store
export default searchValueSlice.reducer;
