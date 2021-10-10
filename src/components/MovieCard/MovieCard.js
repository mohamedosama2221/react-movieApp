import React from "react";
import { Button } from "../Header/Header.style";
import { Card } from "./MovieCard.style";
const MovieCard = ({ item }) => {
  return (
    <Card className="card">
      <img src={item.Poster} className=" card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{item.Title}</p>
        <Button className="btn btn-primary">More Details</Button>
      </div>
    </Card>
  );
};

export default MovieCard;
