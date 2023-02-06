import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux-store/movieSlice";
import { Header } from "./Header";
import Card from "./Card";

const Home = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading"> Movies list</h1>
          </div>
          {movies.length > 0 ? (
            <div className="movie-grid">
              {movies.map((movie, index) => (
                <Card
                  key={index}
                  title={movie.original_title}
                  img={movie.backdrop_path}
                  id={movie.id}
                />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
