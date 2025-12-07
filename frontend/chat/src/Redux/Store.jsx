import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.jsx";
import messageReducer from "./MessageSlice.jsx";

const store = configureStore({
  // Your store configuration goes here
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});
export default store;
