import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../redux-store/movieSlice";

const Card = ({ title, id, img }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(getMovieDetails(id)).then(() => {
      navigate(`/movie/${id}`);
    });
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="Poster" />
      <h5>{title}</h5>
      <button className="btn" onClick={() => handleClick(id)}>
        View More
      </button>
    </div>
  );
};

export default Card;
