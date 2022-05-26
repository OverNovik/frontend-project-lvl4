import React from 'react';
import Channels from './components/Channels/Channels.jsx';
import ChatField from './components/СhatField/ChatField.jsx';

const Chat = () => {
  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <ChatField />
      </div>
    </div>
  );
}

export default Chat;
