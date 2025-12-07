import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
