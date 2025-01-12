import React, { useState } from "react";
import ChatInput from "./ChatInput";
import MessageContainer from "./MessageContainer";

const Container = () => {

  const [messages, setmessages]=useState([
    {user:false,text:"Hey I am Amrita-gpt, Ask any queries related to Amrita Univeristy"}
  ]);

  const [isLoading,setLoading]=useState(false);

  const handleQuery=async(query)=>{
    setLoading(true);
    try{
      const response=await fetch("http://127.0.0.1:8000/get-response/",{
        method:"POST",
        headers:{
          "content-Type":"application/json",
        },
        body:JSON.stringify({query}),
      })
      const data=await response.json();
      setmessages(prev=>[...prev,{user:false,text:data.response}])
    }catch(error){
      console.log("Error",error);
      setmessages(prev=>[...prev,{user:false,text:"Response Failed!"}])
    }
    setLoading(false);
  }

  const addMessage=(message)=>{
    setmessages(prev=>[...prev,message]);
    if(message.user) handleQuery(message.text);
  }

  return (
    <div className="flex bg-[#DAD9D9] w-[90%] md:w-[70%] sm:w-[80%] mx-auto h-full mb-10 rounded-2xl py-6 md:py-10 md:px-10 mt-2 ">
      <div className="w-full flex flex-col justify-between bottom-6 left-0 right-0 mx-auto px-6">
        <div className="flex-grow overflow-y-auto">
          <MessageContainer messages={messages} isLoading={isLoading} />
        </div>
        <div className="items-baseline">
          <ChatInput addMessage={addMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Container;