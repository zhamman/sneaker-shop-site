import React, { useState } from "react";
import "../styles/ImageDisplay.scss";

const ImageDisplay = ({ clicked, setClicked }) => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const images = [
    { url: "../images/image-product-1.jpg" },
    { url: "../images/image-product-2.jpg" },
    { url: "../images/image-product-3.jpg" },
    { url: "../images/image-product-4.jpg" },
  ];

  console.log(currentIndex);

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      SetCurrentIndex(0);
    } else {
      SetCurrentIndex(currentIndex + 1);
    }
  };
  const prevImage = () => {
    if (currentIndex === 0) {
      SetCurrentIndex(images.length - 1);
    } else {
      SetCurrentIndex(currentIndex - 1);
    }
  };
  console.log(clicked);

  return (
    <div className="image-section-2">
      <div className="large-image">
        <div className="svg-wrapper-left" onClick={prevImage}>
          <svg
            className="prev"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <img src={images[currentIndex].url} alt="" />
        <div className="svg-wrapper-right" onClick={nextImage}>
          <svg
            className="next"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="exit-button" onClick={() => setClicked(!clicked)}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="hsl(26, 100%, 55%)"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="small-images-2">
        <div
          className="img"
          onClick={() => {
            SetCurrentIndex(0);
          }}
          style={{
            border: currentIndex === 0 ? "3px solid hsl(26, 100%, 55%)" : "",
          }}
        >
          <img
            style={{
              opacity: currentIndex === 0 ? "0.7" : "",
            }}
            src="../images/image-product-1-thumbnail.jpg"
            alt=""
          />
        </div>
        <div
          className="img"
          onClick={() => {
            SetCurrentIndex(1);
          }}
          style={{
            border: currentIndex === 1 ? "3px solid hsl(26, 100%, 55%)" : "",
          }}
        >
          <img
            style={{
              opacity: currentIndex === 1 ? "0.7" : "",
            }}
            src="../images/image-product-2-thumbnail.jpg"
            alt=""
          />
        </div>
        <div
          className="img"
          onClick={() => {
            SetCurrentIndex(2);
          }}
          style={{
            border: currentIndex === 2 ? "3px solid hsl(26, 100%, 55%)" : "",
          }}
        >
          <img
            style={{
              opacity: currentIndex === 2 ? "0.7" : "",
            }}
            src="../images/image-product-3-thumbnail.jpg"
            alt=""
          />
        </div>
        <div
          className="img"
          onClick={() => {
            SetCurrentIndex(3);
          }}
          style={{
            border: currentIndex === 3 ? "3px solid hsl(26, 100%, 55%)" : "",
          }}
        >
          <img
            style={{
              opacity: currentIndex === 3 ? "0.7" : "",
            }}
            src="../images/image-product-4-thumbnail.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
