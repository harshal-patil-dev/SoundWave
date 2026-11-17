function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <img
        src={artist.image}
        alt={artist.name}
        className="artist-image"
      />

      <h3>{artist.name}</h3>
      <p>{artist.category}</p>
    </div>
  );
}

export default ArtistCard;