import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./slices/counterSlice";

export default configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
