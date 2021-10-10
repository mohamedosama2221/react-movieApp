import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MovieCard from "./../MovieCard/MovieCard";

const Slider = ({ items }) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 4, spacing: 0 });

  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item) => {
        return (
          <div className="keen-slider__slide number-slide1">
            <MovieCard item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
