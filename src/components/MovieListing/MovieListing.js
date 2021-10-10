import React from "react";
import Slider from "./Slider";
import { Links } from "../Header/Header.style";
import GridLoader from "react-spinners/GridLoader";
const MovieListing = (props) => {
  const { movies, tvShows } = props;
  return (
    <div>
      <Links as="h2" style={{ margin: "1.5rem 0" }}>
        Movies
      </Links>
      {movies && movies.length > 0 ? (
        <Slider items={movies} />
      ) : (
        <div className="d-flex justify-content-center">
          <GridLoader size={15} margin={2} color="#950101" />
        </div>
      )}
      <Links as="h2" style={{ margin: "1.5rem 0", marginTop: "5rem" }}>
        TVShows
      </Links>

      {tvShows && tvShows.length > 0 ? (
        <Slider items={tvShows} />
      ) : (
        <div className="d-flex justify-content-center">
          <GridLoader size={15} margin={2} color="#950101" />
        </div>
      )}
    </div>
  );
};

export default MovieListing;
