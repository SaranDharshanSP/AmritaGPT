import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ChatInput = () => {
  return (
    <div className="flex p-3 items-center justify-between">
      <div className="bg-[#A4123F] p-4 rounded-full">
        <FaMicrophone size={25} color="white"/>
      </div>
      <input type="text" placeholder="Ask me anything about Amrita Vishwa Vidyapeetham!" className="w-full mx-6 py-4 px-6 rounded-lg outline-none text-lg"/>
      <div className="bg-white rounded-xl p-4">
        <IoSend size={25}/>
      </div>
    </div>
  );
};

export default ChatInput;
