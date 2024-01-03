import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    value: 0,
  },
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
