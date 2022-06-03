import { createSlice } from "@reduxjs/toolkit";

const messagesSlices = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {
    getMessages: (state, { payload: messages }) => {
      state.messages = messages;
    },
    addMessage: (state, { payload: messages }) => {
      state.messages.push(messages);
    }
  }
})
export const { getMessages, addMessage } = messagesSlices.actions;
export default messagesSlices.reducer;