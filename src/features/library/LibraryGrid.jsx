import SongCard from "../music/SongCard";

function LibraryGrid({ songs = [] }) {
  if (songs.length === 0) {
    return (
      <div className="empty-library">
        <h3>Your library is empty</h3>
        <p>Add some songs to get started.</p>
      </div>
    );
  }

  return (
    <div className="library-grid">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

export default LibraryGrid;