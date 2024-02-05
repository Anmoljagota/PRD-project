import { useLocation } from "react-router-dom";
import "./App.css";
import Admin from "./Components/admin/Admin";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
function App() {
  const location = useLocation();
  console.log("oooo", location.pathname);
  return (
    <>
      {location.pathname === "/signup" && <Signup />}
      {location.pathname === "/login" && <Login />}
      {location.pathname !== "/login" && <Admin />}
    </>
  );
}

export default App;
