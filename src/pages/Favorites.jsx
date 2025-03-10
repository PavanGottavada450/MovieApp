import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  // Handle the case when the context is unavailable
  if (!favorites) {
    return (
      <div className="favorites-empty">
        <h2>Something went wrong...</h2>
        <p>Failed to load your favorite movies. Please try again later.</p>
      </div>
    );
  }

  // Handle the case when no favorites are added
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }

  // Render the favorite movies
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
