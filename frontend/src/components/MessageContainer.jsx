import React from "react";
import UserChat from "./UserChat";
import GPTChat from "./GPTChat";

const MessageContainer = () => {
  return (
    <div className="px-6 mb-4">
      <GPTChat message={"Hey im amrita gpt"} />
      <UserChat message={"Tell me about the clubs in Amrita!"} />
      <GPTChat message={"Based on the provided context, here are all the clubs in Amrita that I can find information about:  IETE Club at Amrita, Google Developer Student Clubs Amrita, Srishti - The literary club, Natyasudha (Dance Club), Ragasudha (Music Club)"} />
    </div>
  );
};

export default MessageContainer;
