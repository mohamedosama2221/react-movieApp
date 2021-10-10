import {
  FETCH_MOVIES,
  FETCH_TVSHOWS,
  FETCH_MOVIEDETAILS,
  CLEAR_ALL,
  CLEAR,
} from "./types";

const initState = {
  movies: [],
  tvShows: [],
  currentMovie: [],
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
