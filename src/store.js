import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./store/CartSlice";

let user = createSlice({
  // state 이름
  name: "user",
  // 실제 state 값
  initialState: "kim",
});

export default configureStore({
  reducer: {
    // 작명: user.reducer
    user: user.reducer,
    cart: cart.reducer,
  },
});
