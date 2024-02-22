import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../api/tmdb";
import "./MovieList.css";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await getPopularMovies();
      setMovies(movies);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <p>Average Rating: {movie.vote_average}</p>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
