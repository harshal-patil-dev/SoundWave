import SectionHeader from "../../components/common/SectionHeader";
import ArtistCard from "../music/ArtistCard";

function HomePage() {
  const artists = [
    {
      id: 1,
      name: "Rosalia",
      category: "3.7M Listeners",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    },
    {
      id: 2,
      name: "Kendrick Lamar",
      category: "2.3M Listeners",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    },
    {
      id: 3,
      name: "Travis Scott",
      category: "1.7M Listeners",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    },
    {
      id: 4,
      name: "Billie Eilish",
      category: "4.5M Listeners",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300",
    },
    {
      id: 5,
      name: "Beyonce",
      category: "8.4M Listeners",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    },
    {
      id: 6,
      name: "Taylor Swift",
      category: "6.2M Listeners",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
    },
  ];

  const featuredSong = {
    title: "Turn Up the Volume with Gaga",
    artist: "Lady Gaga",
    album: "Step into her world of bold sound and fearless style.",
    image: "../public/images/1cc1026394ad4932b27e2ff83dd4c680.png",
  };

  const albums = [
    {
      id: 1,
      title: "Starboy",
      artist: "The Weeknd",
      image:
        "https://i.pinimg.com/1200x/5f/f4/83/5ff483cf28501863e5415cd1546951de.jpg",
    },
    {
      id: 2,
      title: "To Pimp a Butterfly",
      artist: "Kendrick Lamar",
      image:
        "https://i.pinimg.com/236x/6d/c7/b5/6dc7b59c5758f75e15fad2ce1424bc3c.jpg",
    },
    {
      id: 3,
      title: "Cowboy Carter",
      artist: "Beyonce",
      image:
        "https://i.pinimg.com/1200x/db/00/cb/db00cb21a06ad5f24fce982281645d3d.jpg",
    },
    {
      id: 4,
      title: "Fame",
      artist: "Ariana Grande",
      image: "https://coverartarchive.org/release/534ded27-4af5-4e97-808b-1eabfed45f74/front-500",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-top-layout">
        <section className="featured-section">
          <div className="featured-content">
            <span className="featured-label">🔥 NEW RELEASE</span>
            <h1>{featuredSong.title}</h1>
            <p>{featuredSong.album}</p>
            <button className="featured-play-btn">▶ Play</button>
          </div>

          <div className="featured-artwork">
            <img src={featuredSong.image} alt={featuredSong.artist} />
          </div>
        </section>

        <section className="top-artists-section">
          <SectionHeader title="Your Top Artists" action="See More" />

          <div className="artists-grid">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
      </div>

      <section className="home-section">
        <SectionHeader title="Listening Highlights" action="See More" />

        <div className="albums-grid">
          {albums.map((album) => (
            <div className="album-card" key={album.id}>
              <img src={album.image} alt={album.title} />
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
