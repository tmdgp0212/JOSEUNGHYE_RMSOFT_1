import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};

export default Router;
