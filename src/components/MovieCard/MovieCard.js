import React from "react";
import { Button } from "../Header/Header.style";
import { Card } from "./MovieCard.style";
import { Link } from "react-router-dom";
const MovieCard = ({ item }) => {
  return (
    <Card className="card">
      <img
        src={item.Poster}
        className="card-img-top"
        alt={item.Title}
        style={{ height: "65%" }}
      />
      <div className="card-body">
        <p className="card-text">{item.Title}</p>
        <Button className="btn btn-primary text-white">
          <Link
            to={`/movie/${item.imdbID}`}
            style={{ textDecoration: "none", color: "#1a242f" }}
          >
            More Details
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default MovieCard;
