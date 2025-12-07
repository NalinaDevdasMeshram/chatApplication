import Sidebar from "./Sidebar.jsx";
import MessageContainer from "./MessageContainer.jsx";

const Homepage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[600px] rounded-lg bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Homepage;
