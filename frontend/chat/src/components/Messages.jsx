import Message from "./Message.jsx";
import useGetMessages from "../hook/useGetMessages.jsx";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.message);
  const scrollRef = useRef();
  console.log("message", messages);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  if (!messages) return;
  return (
    <div ref={scrollRef} className="overflow-y-auto max-h-[400px] p-3">
      {messages &&
        messages.map((message) => {
          return <Message key={message?._id} message={message} />;
        })}
    </div>
  );
};

export default Messages;
