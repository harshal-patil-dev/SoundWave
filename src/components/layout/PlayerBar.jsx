import { useState } from "react";

function PlayerBar() {
  const [volume, setVolume] = useState(70);

  return (
    <footer className="player-bar">
      <div className="player-song-info">
        <div className="song-thumbnail">♪</div>

        <div>
          <h4>No Song Playing</h4>
          <p>Select a song to start listening</p>
        </div>
      </div>

      <div className="player-controls">
        <button aria-label="Previous song">⏮</button>
        <button className="play-btn" aria-label="Play">▶</button>
        <button aria-label="Next song">⏭</button>
      </div>

      <div className="player-volume">
        <span>Volume: {volume}%</span>

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
        />
      </div>
    </footer>
  );
}

export default PlayerBar;