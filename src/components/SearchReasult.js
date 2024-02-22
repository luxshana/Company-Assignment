import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 ? (
        <ul className="movie-list">
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
<h3>{movie.title}</h3>
                  <p>Release Date: {movie.release_date}</p>
                  <p>Average Rating: {movie.vote_average}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};

export default SearchResults;