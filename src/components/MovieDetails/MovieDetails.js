import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchingSingleMovie, clear } from "./../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import GridLoader from "react-spinners/GridLoader";
import { DetailsWrapper } from "./MovieDetails.style";
const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchingSingleMovie(movieId));

    return () => {
      dispatch(clear());
    };
  }, []);
  const renderComponent = () => {
    return state.currentMovie.length > 0 ? (
      <>
        <DetailsWrapper className="container rounded">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4">{state.currentMovie[0].Title}</h1>
              <h5 className="mb-4">
                Release Date: {state.currentMovie[0].Released}
              </h5>
              <h5 className="mb-4">{state.currentMovie[0].imdbRating}</h5>
              <h5 className="mb-4">
                Duration: {state.currentMovie[0].Runtime}
              </h5>
              <h5 className="mb-4">
                Box Office: {state.currentMovie[0].BoxOffice || "Not found"}
              </h5>
              <p className="mb-4">Story: {state.currentMovie[0].Plot}</p>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
              <img
                className="img-fluid"
                src={state.currentMovie[0].Poster}
                alt=""
              />
            </div>
          </div>
        </DetailsWrapper>
      </>
    ) : (
      <div className="d-flex justify-content-center">
        <GridLoader size={15} margin={2} color="#950101" />
      </div>
    );
  };
  return renderComponent();
};

export default MovieDetails;
