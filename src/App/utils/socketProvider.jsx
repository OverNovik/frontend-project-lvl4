import React from "react";
import socketio from "socket.io";
import SocketContext from "./contexts/socketContext.js";

const SocketProvider = ({ children }) => {
  const socket = socketio();

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider;