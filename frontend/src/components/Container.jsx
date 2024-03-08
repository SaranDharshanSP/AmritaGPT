import React from "react";
import ChatInput from "./ChatInput";

const Container = () => {
  return (
    <div className="bg-[#DAD9D9] md:w-[75%] sm:w-[90%] mx-auto h-[80vh] rounded-2xl p-10 mt-2 relative">
      <div className="w-full absolute bottom-6 left-0 right-0 mx-auto px-6">
        <ChatInput />
      </div>
    </div>
  );
};

export default Container;
