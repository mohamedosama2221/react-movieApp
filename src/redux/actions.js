import {
  FETCH_MOVIES,
  FETCH_TVSHOWS,
  FETCH_MOVIEDETAILS,
  CLEAR_ALL,
  CLEAR,
} from "./types";
import { APIKEY } from "./../api/movieApiKey";
import axios from "../api/movieApi";

export const fetchingMovies =
  (url = "Harry") =>
  async (dispatch) => {
    const data = await axios.get(`?apiKey=${APIKEY}&s=${url}&type=movie`);
    const products = await data.data;
    console.log(`from action ${products.Search}`);

    dispatch({
      type: FETCH_MOVIES,
      payload: {
        movies: products.Search,
      },
    });
  };
export const fetchingTVshows =
  (url = "Harry") =>
  async (dispatch) => {
    const data = await axios.get(`?apiKey=${APIKEY}&s=${url}&type=series`);
    const products = await data.data;
    console.log(`from action ${products.Search}`);
    dispatch({
      type: FETCH_TVSHOWS,
      payload: {
        tvShows: products.Search,
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
