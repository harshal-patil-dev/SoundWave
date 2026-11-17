import SectionHeader from "../../components/common/SectionHeader";
import ArtistCard from "../music/ArtistCard";

function HomePage() {
  const artists = [
    {
      id: 1,
      name: "Arijit Singh",
      category: "Playback Singer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
    },
    {
      id: 2,
      name: "Taylor Swift",
      category: "Pop Artist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
    },
    {
      id: 3,
      name: "The Weeknd",
      category: "R&B Artist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300"
    },
    {
      id: 4,
      name: "Shreya Ghoshal",
      category: "Playback Singer",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300"
    }
  ];

  return (
    <div className="home-page">
      <section className="featured-section">
        <h1>Feel the Music</h1>
        <p>Discover your next favorite sound.</p>
        <button>Explore Music</button>
      </section>

      <section className="home-section">
        <SectionHeader
          title="Top Artists"
          subtitle="Artists you may love"
        />

        <div className="artists-grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionHeader
          title="New Releases"
          subtitle="Fresh music for you"
        />
      </section>

      <section className="home-section">
        <SectionHeader
          title="Listening Highlights"
          subtitle="Your music journey"
        />
      </section>
    </div>
  );
}

export default HomePage;