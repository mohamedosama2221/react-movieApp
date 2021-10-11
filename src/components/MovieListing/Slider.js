import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MovieCard from "./../MovieCard/MovieCard";

const Slider = ({ items }) => {
  const [sliderRef] = useKeenSlider({
    spacing: 3,
    breakpoints: {
      "(min-width: 10px)": { slidesPerView: 2 },

      "(min-width: 768px)": { slidesPerView: 3 },

      "(min-width: 992px)": { slidesPerView: 4 },

      "(min-width: 992px) and (max-width: 1200)": {
        slidesPerView: 4,
      },

      "(min-width: 1200px)": { slidesPerView: 5, spacing: 0 },
      "(min-width: 1600px)": { slidesPerView: 6, spacing: 0 },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item, index) => {
        return (
          <div className="keen-slider__slide number-slide1" key={index}>
            <MovieCard item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
