import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckBoxChange = () => {
    setUser({ ...user, gender: user.gender === "male" ? "female" : "male" });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http:///localhost:8080/api/v1/user/register",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        navigate("/Login");

        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
    console.log(user);
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded shadow-md bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-2"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              type="text"
              placeholder="Enter Full Name"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-2"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-1"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 p-3 m-1"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Enter Confirm Password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>
                Male:
                <input
                  type="checkbox"
                  className="checkbox mx-2"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckBoxChange("male")}
                />
              </p>
            </div>
            <div className="flex items-center">
              <p>
                Female:
                <input
                  type="checkbox"
                  className="checkbox mx-2"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckBoxChange("female")}
                />
              </p>
            </div>
          </div>

          <p className="text-center my-2">
            Already have an account ?{" "}
            <Link to="/Login" className="text-blue-600">
              Login
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded bg-white text-black mt-4  p-1 text-1xl w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
