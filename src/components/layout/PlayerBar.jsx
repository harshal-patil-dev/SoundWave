
import { useState } from "react";
import {
  SkipBack,
  Play,
  SkipForward,
  SpeakerHigh,
  Heart,
  Shuffle,
  Repeat,
} from "@phosphor-icons/react";

function PlayerBar() {
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="player-bar">

      {/* Song Information */}
      <div className="player-song-info">
        <div className="song-thumbnail">♪</div>

        <div>
          <h4>No Song Playing</h4>
          <p>Select a song to start listening</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="player-controls">
        <button aria-label="Previous song">
          <SkipBack size={20} weight="fill" />
        </button>

        <button
          className="play-btn"
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Ⅱ" : <Play size={21} weight="fill" />}
        </button>

        <button aria-label="Next song">
          <SkipForward size={20} weight="fill" />
        </button>
      </div>

      {/* Song Progress */}
      <div className="player-progress">
        <span>0:00</span>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(event) =>
            setProgress(Number(event.target.value))
          }
          aria-label="Song progress"
        />

        <span>0:00</span>
      </div>

      {/* Extra Controls */}
      <div className="player-extra-controls">
        <div className="player-volume">
          <SpeakerHigh size={20} weight="fill" />

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(event) =>
              setVolume(Number(event.target.value))
            }
            aria-label="Volume"
          />
        </div>

        <button aria-label="Favorite">
          <Heart size={21} weight="fill" />
        </button>

        <button aria-label="Shuffle">
          <Shuffle size={20} />
        </button>

        <button aria-label="Repeat">
          <Repeat size={20} />
        </button>
      </div>

    </footer>
  );
}

export default PlayerBar;
