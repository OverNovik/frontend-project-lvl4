import React from "react";
import ChatFieldForm from "./ChatFieldForm/ChatFieldForm.jsx";
import ChatFieldHeader from "./ChatFieldHeader/ChatFieldHeader.jsx";
import ChatFieldMessage from "./ChatFieldMessage/ChatFieldMessage.jsx";

const ChatField = () => {
  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <ChatFieldHeader />
        <div id="messages-box" className="chat-messages overflow-auto px-5 ">
          <ChatFieldMessage />
          <div className="mt-auto px-5 py-3">
            <ChatFieldForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatField;