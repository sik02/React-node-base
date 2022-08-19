import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavBar from "./components/views/NavBar/NavBar";
import SideBar from "./components/views/SideBar/SideBar";
function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} /> */}
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
