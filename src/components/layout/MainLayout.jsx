import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
