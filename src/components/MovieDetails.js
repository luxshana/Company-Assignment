import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/tmdb";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);
    } catch (error) {
      console.error("Error fetching moviedetails:", error);
    }
  };

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className="movie-details">
      <div className="card">
        <div className="img">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        
        <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Genre: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p className="movie-overview">{movie.overview}</p>
        </div>
       
      </div>
    </div>
  );
};

export default MovieDetails;
