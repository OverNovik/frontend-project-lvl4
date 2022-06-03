import React from "react";
import io from "socket.io-client";
import SocketContext from "./contexts/socketContext.js";
import { useDispatch } from "react-redux";
import { addMessage } from '../slices/messagesSlices.js';

const SocketProvider = ({ children }) => {
  const socket = io();
  const dispatch = useDispatch();

  socket.on("addMessage", (message) => {
    dispatch(addMessage(message))
  });

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider;