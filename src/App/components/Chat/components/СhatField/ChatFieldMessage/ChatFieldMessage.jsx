import React from "react";
import filter from "leo-profanity";

const ChatFieldMessage = ({ message }) => {
  return (
    <div className="text-break mb-2">
      <b>{message.username}</b>: {filter.clean(message.text)}
    </div>
  );
};

export default ChatFieldMessage;
