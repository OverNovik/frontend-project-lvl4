/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { useDispatch } from 'react-redux';
import SocketContext from './contexts/socketContext.js';
import { addMessage } from '../slices/messagesSlices.js';
import {
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannelId,
} from '../slices/channelsSlices.js';

const SocketProvider = ({ children, socket }) => {
  const dispatch = useDispatch();

  socket.on('newMessage', (message) => {
    dispatch(addMessage(message));
  });

  socket.on('newChannel', (channel) => {
    dispatch(addChannel(channel));
    dispatch(setCurrentChannelId(channel.id));
  });

  socket.on('removeChannel', (channel) => {
    dispatch(removeChannel(channel.id));
  });

  socket.on('renameChannel', (channel) => {
    dispatch(renameChannel(channel));
  });

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
