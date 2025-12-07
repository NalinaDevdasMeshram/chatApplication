import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full overflow-hidden">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
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
