import {
  FETCH_MOVIES,
  FETCH_TVSHOWS,
  FETCH_MOVIEDETAILS,
  CLEAR_ALL,
  CLEAR,
  SHOW_HOME,
} from "./types";

const initState = {
  movies: [],
  tvShows: [],
  currentMovie: [],
  homePage: true,
};

export const mainReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: payload.movies,
      };
    case FETCH_TVSHOWS:
      return {
        ...state,
        tvShows: payload.tvShows,
      };
    case FETCH_MOVIEDETAILS:
      return {
        ...state,
        currentMovie: [payload.movieDetails],
        homePage: false,
      };
    case SHOW_HOME:
      return {
        ...state,
        homePage: true,
      };
    case CLEAR:
      return {
        ...state,
        currentMovie: [],
      };
    case CLEAR_ALL:
      return {
        ...state,
        movies: [],
        tvShows: [],
      };
    default:
      return state;
  }
};
