import React from "react";
import { io } from "socket.io-client";
import SocketContext from "./contexts/socketContext.js";
import { useDispatch } from "react-redux";
import { addMessage } from '../slices/messagesSlices.js';
import { addChannel, removeChannel, setCurrentChannelId } from '../slices/channelsSlices.js';

const SocketProvider = ({ children }) => {
  const socket = io();
  const dispatch = useDispatch();

  socket.on("newMessage", (message) => {
    dispatch(addMessage(message))
  });

  socket.on("newChannel", (channel) => {
    dispatch(addChannel(channel))
    dispatch(setCurrentChannelId(channel.id))
  });

  socket.on("removeChannel", (channel) => {
    dispatch(removeChannel(channel.id));
  })

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider;