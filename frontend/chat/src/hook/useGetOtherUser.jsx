import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../Redux/UserSlice.jsx";
const useGetOtherUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const result = await axios.get(`http://localhost:8080/api/v1/user`);

        //store
        dispatch(setOtherUsers(result.data.otherUsers));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
};

export default useGetOtherUser;
