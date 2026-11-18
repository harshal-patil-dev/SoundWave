
function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <img
        className="artist-image"
        src={artist.image}
        alt={artist.name}
      />

      <div className="artist-info">
        <h3>{artist.name}</h3>
        <p>{artist.category}</p>
      </div>

      <span className="artist-arrow">›</span>
    </div>
  );
}

export default ArtistCard;
