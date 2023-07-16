import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
