"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import amritalogo from "../app/images/amritalogo.png"
import ChatContainer from "./components/ChatContainer";


export default function Home() {
  const [message, setMessage] = useState("Loading")

  useEffect(() => {
    fetch("http://localhost:8080/")
    .then((response) => response.json())
    .then((data) => {
      setMessage(data.hello);
    });
  }, [])
  return (
    <div className="mt-[50px]">
      <div className="flex items-baseline mx-auto justify-center w-full">
        <Image src={amritalogo} width={200} alt="amrita logo"/>
        <h2 className="text-xl">GPT</h2>
      </div>
      <ChatContainer/>
      {/* <div className="text-3xl">{message}</div> */}
    </div>
    
  );
}
