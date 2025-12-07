import React from "react";
import OtherUsers from "./OtherUsers.jsx";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const logouthandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`http://127.0.0.1:8080/api/v1/user/logout`);
      navigate("/login");
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full w-72 flex flex-col bg-white/20 backdrop-blur-lg">
      <form action="" className="flex items-center gap-2 p-4">
        <input
          type="text"
          className="input input-bordered rounded-lg outline-none w-full h-12 p-4"
          placeholder="Search"
        />
        <button
          type="submit"
          className="btn bg-zinc-300 cursor-pointer hover:bg-white/10 rounded p-2"
        >
          <IoSearchOutline size={30} />
        </button>
        <div className="divider font-semibold"></div>
      </form>
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        <OtherUsers />
      </div>

      <button
        onClick={logouthandler}
        className="btn btn-sm w-20 m-2 p-2 bg-white rounded-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
