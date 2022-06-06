import { createSlice } from "@reduxjs/toolkit";

const messagesSlices = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {
    getMessages: (state, { payload: messages }) => {
      state.messages = messages;
    },
    addMessage: (state, { payload: message }) => {
      state.messages.push(message);
    }
  }
})
export const { getMessages, addMessage } = messagesSlices.actions;
export default messagesSlices.reducer;