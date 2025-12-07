import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../Redux/UserSlice.jsx";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      dispatch(setAuthUser(response.data));
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-2"
              type="text"
              placeholder="Enter Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-1"
              type="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <p className="text-center my-2">
            Don't have an account ?
            <Link to="/register" className="text-blue-600">
              Sign Up
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded bg-white text-black mt-4 p-1 text-1xl w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
