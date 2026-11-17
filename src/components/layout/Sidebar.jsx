import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">SoundWave</h2>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/explore" className={({ isActive }) => isActive ? "active" : ""}>
          Explore
        </NavLink>

        <NavLink to="/library" className={({ isActive }) => isActive ? "active" : ""}>
          Library
        </NavLink>

        <NavLink to="/playlists" className={({ isActive }) => isActive ? "active" : ""}>
          Playlists
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;