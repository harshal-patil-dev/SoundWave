function SongCard({ song }) {
  return (
    <div className="song-card">
      <div className="song-cover">
        {song.cover ? (
          <img src={song.cover} alt={song.title} />
        ) : (
          <span>♪</span>
        )}
      </div>

      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>

      <button aria-label={`Play ${song.title}`}>
        ▶
      </button>
    </div>
  );
}

export default SongCard;