import { useState } from "react";

function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="topbar">
      <div className="topbar-greeting">
        <h2>Hello, Music Lover!</h2>
        <p>What would you like to listen to today?</p>
      </div>

      <div className="topbar-actions">
        <input
          type="text"
          placeholder="Search songs, artists..."
          className="topbar-search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button className="notification-btn">Notifications</button>

        <div className="profile-avatar">H</div>
      </div>
    </header>
  );
}

export default Topbar;