import React, { useState, useContext } from "react";
import { CountContext, ActiveCartContext } from "../Contexts/Contexts";
import "../styles/Display.scss";
import Cart from "./Cart";
import ImageDisplay from "./ImageDisplay";
import Slider from "./Slider";

const Display = () => {
  const { count, setCount } = useContext(CountContext);
  const { cartActive, handleCart } = useContext(ActiveCartContext);
  const [activePic, setActivePic] = useState("../images/image-product-1.jpg");
  const [temp, setTemp] = useState(0);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="outer-display-container">
      {clicked && (
        <Slider
          activePic={activePic}
          clicked={clicked}
          setClicked={setClicked}
          setActivePic={setActivePic}
        />
      )}
      <div
        className="display-container"
        style={{ opacity: clicked ? "0.2" : "" }}
      >
        <div className="image-section">
          <div className="large-image" onClick={() => setClicked(!clicked)}>
            <img src={activePic} alt="" />
          </div>
          <div className="small-images">
            <div
              className="img"
              onClick={() => {
                setActivePic("../images/image-product-1.jpg");
              }}
              style={{
                border:
                  activePic === "../images/image-product-1.jpg"
                    ? "3px solid hsl(26, 100%, 55%)"
                    : "",
              }}
            >
              <img
                style={{
                  opacity:
                    activePic === "../images/image-product-1.jpg" ? "0.7" : "",
                }}
                src="../images/image-product-1-thumbnail.jpg"
                alt=""
              />
            </div>
            <div
              className="img"
              onClick={() => {
                setActivePic("../images/image-product-2.jpg");
              }}
              style={{
                border:
                  activePic === "../images/image-product-2.jpg"
                    ? "3px solid hsl(26, 100%, 55%)"
                    : "",
              }}
            >
              <img
                style={{
                  opacity:
                    activePic === "../images/image-product-2.jpg" ? "0.7" : "",
                }}
                src="../images/image-product-2-thumbnail.jpg"
                alt=""
              />
            </div>
            <div
              className="img"
              onClick={() => {
                setActivePic("../images/image-product-3.jpg");
              }}
              style={{
                border:
                  activePic === "../images/image-product-3.jpg"
                    ? "3px solid hsl(26, 100%, 55%)"
                    : "",
              }}
            >
              <img
                style={{
                  opacity:
                    activePic === "../images/image-product-3.jpg" ? "0.7" : "",
                }}
                src="../images/image-product-3-thumbnail.jpg"
                alt=""
              />
            </div>
            <div
              className="img"
              onClick={() => {
                setActivePic("../images/image-product-4.jpg");
              }}
              style={{
                border:
                  activePic === "../images/image-product-4.jpg"
                    ? "3px solid hsl(26, 100%, 55%)"
                    : "",
              }}
            >
              <img
                style={{
                  opacity:
                    activePic === "../images/image-product-4.jpg" ? "0.7" : "",
                }}
                src="../images/image-product-4-thumbnail.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="description-section">
          <div className="watermark">
            <h3>Sneaker Company</h3>
          </div>
          <div className="title">
            <h1> Fall Limited Edition Sneakers</h1>
          </div>
          <div className="description">
            <p>
              These low-profile sneakers are your pperfect casual wear
              companion. Featuring a durable rubber outer sole, they'll
              withstand everything the weather can offer.
            </p>
          </div>
          <div className="price-section">
            <div className="price">
              <div className="price-discount">
                <h1>$125.00</h1>
                <p className="discount-percentage">50%</p>
              </div>
              <div className="original-price">
                <p>$250.00</p>
              </div>
            </div>
          </div>
          <div className="cart-section">
            <div className="quantity-slider">
              <div
                className="box left"
                onClick={() => {
                  if (temp > 0) {
                    setTemp(temp - 1);
                  }
                }}
              >
                -
              </div>
              <div className="box mid">{temp}</div>
              <div
                className="box right"
                onClick={() => {
                  setTemp(temp + 1);
                }}
              >
                +
              </div>
            </div>
            <div className="add-to-cart">
              <button
                onClick={() => {
                  setCount(temp);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {cartActive && <Cart count={count} />}
      </div>
    </div>
  );
};

export default Display;
