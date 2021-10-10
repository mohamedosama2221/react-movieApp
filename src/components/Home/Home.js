import React, { useEffect } from "react";
import { fetchingMovies, fetchingTVshows } from "./../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchingMovies());
    dispatch(fetchingTVshows());
  }, [dispatch]);
  return (
    <div className="container">
      <MovieListing movies={state.movies} tvShows={state.tvShows} />
    </div>
  );
};

export default Home;
