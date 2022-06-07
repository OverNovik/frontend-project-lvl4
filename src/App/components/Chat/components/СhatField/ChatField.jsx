import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ChatFieldForm from './ChatFieldForm/ChatFieldForm.jsx';
import ChatFieldHeader from './ChatFieldHeader/ChatFieldHeader.jsx';
import ChatFieldMessage from './ChatFieldMessage/ChatFieldMessage.jsx';

const ChatField = () => {
  const channelId = useSelector((state) => state.channels.currentChannelId);
  const messages = useSelector((state) => state.messages.messages);

  const divEl = useRef();

  useEffect(() => {
    if (messages) {
      divEl.current.scrollIntoView();
    }
  }, [messages, channelId]);

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <ChatFieldHeader
          count={
            messages
              ? messages.filter((item) => item.channelId === channelId).length
              : ''
          }
        />
        <div id="messages-box" className="chat-messages overflow-auto px-5 ">
          {messages
            ? messages
              .filter((item) => item.channelId === channelId)
              .map((item) => <ChatFieldMessage message={item} key={item.id} />)
            : null}
          <div ref={divEl} />
        </div>
        <div className="mt-auto px-5 py-3">
          <ChatFieldForm />
        </div>
      </div>
    </div>
  );
};

export default ChatField;
