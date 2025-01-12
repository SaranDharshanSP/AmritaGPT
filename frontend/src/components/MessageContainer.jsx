import React from "react";
import UserChat from "./UserChat";
import GPTChat from "./GPTChat";

const MessageContainer = ({messages=[],isLoading}) => {
  return (
  <>
    <div>
    {
      messages.map((msg,index)=>(
        msg.user?(
          <UserChat key={index} message={msg.text}/>
        ):(
          <GPTChat key={index} message={msg.text}/>
        )
      ))
    }
    {isLoading && <GPTChat message="Geting Response..."/>}
    </div>
  </>
);
}
export default MessageContainer;
