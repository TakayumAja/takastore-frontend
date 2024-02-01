import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart: (state, action) => {
      const total = action.payload.price;
      state.cartItems = [
        ...state.cartItems,
        { ...action.payload, qty: 1, total: total },
      ];
      toast.success("Data berhasil ditambahkan!");
    },
  },
});

export const countCartItems = (state) => state.cart.cartItems.length;

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
