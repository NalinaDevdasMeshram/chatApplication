import axios from "axios";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
        { message }
      );
      dispatch(setMessage([...messages, res?.data?.message?.message]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="px-4 my-3 overflow-hidden">
      <div className="relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Send Message a.."
          className="border text-xl rounded-lg block w-full text-black p-4"
        />
        <button
          type="submit"
          className="absolute text-2xl flex inset-y-0 end-0 items-center pr-4 cursor-pointer"
        >
          <IoMdSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
