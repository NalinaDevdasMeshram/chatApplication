import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  return (
    <div>
      <div
        className={`chat ${
          authUser?._id === message?.senderId ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-16 rounded-full overflow-hidden">
            <img
              alt="refresh"
              src={
                message?.senderId === authUser?._id
                  ? authUser?.profilePhoto
                  : selectedUser?.profilePhoto
              }
            />
          </div>
        </div>
        <div className="chat-header mt-3">
          <div className="chat-bubble bg-zinc-500 text-white rounded-lg p-3 w-fit">
            {message.message}
          </div>
          <time className="text-base opacity-50">12:45</time>
        </div>
      </div>
    </div>
  );
};

export default Message;
