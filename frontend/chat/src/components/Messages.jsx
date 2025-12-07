import Message from "./Message.jsx";
import useGetMessages from "../hook/useGetMessages.jsx";
import { useSelector } from "react-redux";
const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.message);
  console.log("message", messages);
  if (!messages) return;
  return (
    <div>
      {messages &&
        messages.map((message) => {
          return <Message key={message?._id} message={message} />;
        })}
    </div>
  );
};

export default Messages;
