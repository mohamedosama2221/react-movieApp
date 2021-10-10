import React, { useEffect } from "react";
import MovieDetails from "./../MovieDetails/MovieDetails";
import { fetchingMovies, fetchingTVshows } from "./../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchingMovies());
    dispatch(fetchingTVshows());
  }, [dispatch]);
  return (
    <div className="container">
      <MovieDetails movies={state.movies} tvshows={state.tvShows} />
    </div>
  );
};

export default Home;
