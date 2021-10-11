import {
  FETCH_MOVIES,
  FETCH_TVSHOWS,
  FETCH_MOVIEDETAILS,
  CLEAR_ALL,
  CLEAR,
  SHOW_HOME,
} from "./types";
import { APIKEY } from "./../api/movieApiKey";
import axios from "../api/movieApi";

export const fetchingMovies =
  (url = "harry") =>
  async (dispatch) => {
    const data = await axios.get(`?apiKey=${APIKEY}&s=${url}&type=movie`);
    const products = await data.data;
    dispatch({
      type: FETCH_MOVIES,
      payload: {
        movies: products.Search,
      },
    });
  };
export const fetchingTVshows =
  (url = "harry") =>
  async (dispatch) => {
    const data = await axios.get(`?apiKey=${APIKEY}&s=${url}&type=series`);
    const products = await data.data;
    dispatch({
      type: FETCH_TVSHOWS,
      payload: {
        tvShows: products.Search,
      },
    });
  };

export const fetchingSingleMovie = (id) => async (dispatch) => {
  console.log(id);

  const data = await axios.get(`?apiKey=${APIKEY}&i=${id}&plot=full`);
  const products = await data.data;
  console.log(data);
  dispatch({
    type: FETCH_MOVIEDETAILS,
    payload: {
      movieDetails: products,
    },
  });
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};
export const clearAll = () => {
  return {
    type: CLEAR_ALL,
  };
};
export const showHome = () => {
  return {
    type: SHOW_HOME,
  };
};
