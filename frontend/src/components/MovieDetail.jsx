import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.details[id].data);

  return (
    <>
      <div className="movie-details-container">
        {movie ? (
          <div>
            <h2 className="movie-title">{movie.original_title}</h2>
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            </div>
            <p className="movie-description">{movie.overview}</p>
            <h4>Release date :{movie.release_date}</h4>
            <h4>Rating: {movie.vote_average}</h4>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
