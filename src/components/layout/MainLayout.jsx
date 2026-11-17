import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import PlayerBar from "./PlayerBar";

function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <main className="page-content">
          <Outlet />
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}

export default MainLayout;
