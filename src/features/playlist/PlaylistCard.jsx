function PlaylistCard({ playlist }) {
  return (
    <div className="playlist-card">
      <div className="playlist-cover">
        {playlist.cover ? (
          <img src={playlist.cover} alt={playlist.name} />
        ) : (
          <span>♫</span>
        )}
      </div>

      <div className="playlist-info">
        <h3>{playlist.name}</h3>
        <p>{playlist.description}</p>
        <span>{playlist.songs?.length || 0} Songs</span>
      </div>
    </div>
  );
}

export default PlaylistCard;