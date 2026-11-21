
import { NavLink } from "react-router-dom";
import {
  House,
  Compass,
  Heart,
  MusicNotes,
  GearSix,
  SignOut,
} from "@phosphor-icons/react";

function Sidebar() {
  const navItems = [
    { name: "Home", path: "/", icon: House },
    { name: "Explore", path: "/explore", icon: Compass },
    { name: "Library", path: "/library", icon: Heart },
    { name: "Playlists", path: "/playlists", icon: MusicNotes },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img
          src="/images/soundwave-logo.png"
          alt="SoundWave Logo"
          className="sidebar-logo"
        />
        <span>SoundWave</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              title={item.name}
              aria-label={item.name}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <Icon size={23} weight="fill" />
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <button type="button" title="Settings" aria-label="Settings">
          <GearSix size={23} weight="fill" />
        </button>

        <button type="button" title="Logout" aria-label="Logout">
          <SignOut size={23} weight="fill" />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
