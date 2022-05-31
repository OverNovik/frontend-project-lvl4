import { createSlice } from "@reduxjs/toolkit";

const chatSlices = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {
    getChannels: (state, { payload: channels }) => {
      state.channels = channels;
      console.log(state.channels)
    },
    getCurrentChannelId: (state, { payload: currentChannelId }) => {
      state.currentChannelId = currentChannelId;
    },
    getMessages: (state, { payload: messages }) => {
      state.messages = messages;
    }
  }
})
export const { getChannels, getCurrentChannelId, getMessages } = chatSlices.actions;
export default chatSlices.reducer;