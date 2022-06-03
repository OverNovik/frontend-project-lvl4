import { createSlice } from "@reduxjs/toolkit";

const channelsSlices = createSlice({
  name: 'channels',
  initialState: {},
  reducers: {
    getChannels: (state, { payload: channels }) => {
      state.channels = channels;
      console.log(state)
    },
    setCurrentChannelId: (state, { payload: currentChannelId }) => {
      state.currentChannelId = currentChannelId;
    },
  }
})
export const { getChannels, setCurrentChannelId } = channelsSlices.actions;
export default channelsSlices.reducer;