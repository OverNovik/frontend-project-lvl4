import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlices.js';
import channelsReducer from './channelsSlices.js';
import messagesReducer from './messagesSlices.js';

export default configureStore({
  reducer: {
    modal: modalReducer,
    channels: channelsReducer,
    messages: messagesReducer,
  },
});
