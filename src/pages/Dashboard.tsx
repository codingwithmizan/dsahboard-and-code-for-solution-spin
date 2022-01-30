import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebars/Sidebar";
import Header from "../components/headers/Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100  h-screen overflow-hidden ">
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="relative flex flex-col flex-1  overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
