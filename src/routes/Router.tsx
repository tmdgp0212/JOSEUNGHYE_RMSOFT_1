import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Router;
