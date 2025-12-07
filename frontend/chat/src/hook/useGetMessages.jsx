import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../Redux/MessageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8080/api/v1/message/${selectedUser?._id}`
        );
        console.log("result", res);
        dispatch(setMessage(res.data.data.message));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, [selectedUser, dispatch]);
};

export default useGetMessages;
