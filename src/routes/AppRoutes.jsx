import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import Applications from "../pages/Applications/Applications";
import SavedJobs from "../pages/SavedJobs/SavedJobs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
