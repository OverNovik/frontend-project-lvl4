import { createSlice } from "@reduxjs/toolkit";

const chatSlices = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {
    getChannels: (state, { payload: channels }) => {
      state.channels = channels;
      console.log(state)
    },
    setCurrentChannelId: (state, { payload: currentChannelId }) => {
      state.currentChannelId = currentChannelId;
    },
    getMessages: (state, { payload: messages }) => {
      state.messages = messages;
    },
    addMessage: (state, { payload: messages }) => {
      state.messages.push(messages);
    }
  }
})
export const { getChannels, setCurrentChannelId, getMessages, addMessage } = chatSlices.actions;
export default chatSlices.reducer;