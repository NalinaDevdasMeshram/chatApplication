import SendInput from "./SendInput.jsx";
import Messages from "./Messages.jsx";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  console.log("selectedUser", selectedUser);
  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[450px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-500 px-4 py-2 mb-2">
            <div className="avatar online">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={selectedUser?.profilePhoto}
                  alt="refresh"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p className="text-xl text-white">{selectedUser?.fullname}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-w-[450px] flex flex-col justify-center items-center">
          <h1>Hi, {authUser?.fullname}</h1>
          <h1>Let's start conversion</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
