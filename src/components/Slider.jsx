import React from "react";
import "../styles/Slider.scss";
import ImageDisplay from "./ImageDisplay";

const Slider = ({ setClicked, clicked }) => {
  return (
    <div className="slider-container">
      <ImageDisplay setClicked={setClicked} clicked={clicked} />
    </div>
  );
};

export default Slider;
