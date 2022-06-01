import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatFieldForm from "./ChatFieldForm/ChatFieldForm.jsx";
import ChatFieldHeader from "./ChatFieldHeader/ChatFieldHeader.jsx";
import ChatFieldMessage from "./ChatFieldMessage/ChatFieldMessage.jsx";

const ChatField = () => {
  const channelId = useSelector((state) => state.chat.currentChannelId);
  const messages = useSelector((state) => state.chat.messages);

  // let currMessages;
  // if (messages) {
  //   currMessages = messages.filter((item) => item.id === channelId);
  //   console.log(currMessages);
  // }

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <ChatFieldHeader />
        <div id="messages-box" className="chat-messages overflow-auto px-5 ">
          {
            messages && messages.map((item) => {
              return <ChatFieldMessage message={item} key={item.id} />
            })
          }
          <div className="mt-auto px-5 py-3">
            <ChatFieldForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatField;