import OtherUser from "./OtherUser.jsx";
import useGetOtherUser from "../hook/useGetOtherUser.jsx";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUser();
  const { otherUsers } = useSelector((store) => store.user);
  console.log("otherUsers", otherUsers);
  if (!otherUsers) return;
  return (
    <div className="flex flex-col gap-2 px-2">
      {otherUsers?.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
