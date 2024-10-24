import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the input value
const productCartListSlice = createSlice({
  name: "productCartList",
  initialState: {
    productCartList: [],
  },
  reducers: {
    setProductCartList: (state, action) => {
      const existingProduct = state.productCartList.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.productCartList.push(action.payload);
      }
    },
  },
});

// Export the action so that components can dispatch it
export const { setProductCartList } = productCartListSlice.actions;

// Export the reducer to include it in the store
export default productCartListSlice.reducer;
