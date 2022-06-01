import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlices.js";

export default configureStore({
  reducer: {
    chat: chatReducer,
  }
})
