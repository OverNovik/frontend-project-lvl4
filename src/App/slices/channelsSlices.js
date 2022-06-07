/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const channelsSlices = createSlice({
  name: 'channels',
  initialState: {},
  reducers: {
    getChannels: (state, { payload: channels }) => {
      state.channels = channels;
    },
    setCurrentChannelId: (state, { payload: currentChannelId }) => {
      state.currentChannelId = currentChannelId;
    },
    addChannel: (state, { payload: channel }) => {
      state.channels.push(channel);
    },
    removeChannel: (state, actions) => {
      if (state.currentChannelId === actions.payload) {
        state.currentChannelId = 1;
      }
      state.channels = state.channels.filter(
        (item) => item.id !== actions.payload,
      );
    },
    renameChannel: (state, actions) => {
      const item = state.channels.find(
        (channel) => channel.id === actions.payload.id,
      );
      item.name = actions.payload.name;
    },
  },
});
export const {
  getChannels,
  setCurrentChannelId,
  addChannel,
  removeChannel,
  renameChannel,
} = channelsSlices.actions;
export default channelsSlices.reducer;
