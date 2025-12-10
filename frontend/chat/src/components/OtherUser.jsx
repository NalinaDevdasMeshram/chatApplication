import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../Redux/UserSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  console.log(selectedUser);

  const handleSelectedUser = () => {
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={() => handleSelectedUser(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-zinc-100" : ""
        } flex gap-2 items-center hover:bg-gray-200 p-2 cursor-pointer`}
      >
        <div className="avatar online">
          <div className="w-16 rounded-full overflow-hidden">
            <img
              src={user?.profilePhoto}
              alt="refresh"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold ">
            <p>{user?.fullname}</p>
          </div>
        </div>
        <div className="divider my-0 py-0 h-3"></div>
      </div>
    </>
  );
};

export default OtherUser;
