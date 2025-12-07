import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "message",
  initialState: {
    messages: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessage } = MessageSlice.actions;
export default MessageSlice.reducer;
