import React, { useContext, useState, useEffect } from "react";
import { ActiveCartContext, CountContext } from "../Contexts/Contexts";
import "../styles/Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const { count } = useContext(CountContext);
  const { cartActive, handleCart, setCartActive } =
    useContext(ActiveCartContext);
  const [navActive, setNavActive] = useState(1);
  const [navHover, setNavHover] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);
  const breakpoint = 650;
  console.log(windowWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      {windowWidth < 650 ? (
        <div className="navbar-container">
          {mobileNav && (
            <div className="mobile-nav">
              <div
                className="mobile-menu-close"
                onClick={() => {
                  setMobileNav(false);
                }}
              >
                <CgClose />
              </div>
              <div className="mobile-list-items">
                <div
                  className="mobile-list-item"
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <li>Collection</li>
                </div>
                <div
                  className="mobile-list-item"
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <li>Men</li>
                </div>
                <div
                  className="mobile-list-item"
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <li>Women</li>
                </div>
                <div
                  className="mobile-list-item"
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <li>About</li>
                </div>
                <div
                  className="mobile-list-item"
                  onClick={() => {
                    setMobileNav(false);
                  }}
                >
                  <li>Contact</li>
                </div>
              </div>
            </div>
          )}
          <div className="nav-options">
            <div className="logo">
              <div
                className="mobile-menu"
                onClick={() => {
                  setMobileNav(true);
                }}
              >
                <GiHamburgerMenu />
              </div>
              <img src="../images/logo.svg" alt="" />
            </div>
          </div>
          <div className="cart-info">
            <div className="cart" onClick={handleCart}>
              <img src="../images/icon-cart.svg" alt="" />
              {count > 0 && <div className="item-number">{count}</div>}
            </div>
            <div className="profile">
              <img src="../images/image-avatar.png" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-container">
          <div className="nav-options">
            <div className="logo">
              <img src="../images/logo.svg" alt="" />
            </div>
            <div className="list-items">
              <div
                className="list-item"
                onClick={() => {
                  setNavActive(1);
                }}
                onMouseEnter={() => {
                  setNavHover(1);
                }}
                onMouseLeave={() => {
                  setNavHover(0);
                }}
              >
                <li
                  style={{
                    borderBottom:
                      navActive === 1 || navHover === 1
                        ? "4px solid hsl(26, 100%, 55%)"
                        : "none",
                    marginBottom: navActive === 1 ? "-4px" : "none",
                  }}
                >
                  Collection
                </li>
              </div>
              <div
                className="list-item"
                onClick={() => {
                  setNavActive(2);
                }}
                onMouseEnter={() => {
                  setNavHover(2);
                }}
                onMouseLeave={() => {
                  setNavHover(0);
                }}
              >
                <li
                  style={{
                    borderBottom:
                      navActive === 2 || navHover === 2
                        ? "4px solid hsl(26, 100%, 55%)"
                        : "none",
                    marginBottom: navActive === 2 ? "-4px" : "none",
                  }}
                >
                  Men
                </li>
              </div>
              <div
                className="list-item"
                onClick={() => {
                  setNavActive(3);
                }}
                onMouseEnter={() => {
                  setNavHover(3);
                }}
                onMouseLeave={() => {
                  setNavHover(0);
                }}
              >
                <li
                  style={{
                    borderBottom:
                      navActive === 3 || navHover === 3
                        ? "4px solid hsl(26, 100%, 55%)"
                        : "none",
                    marginBottom: navActive === 3 ? "-4px" : "none",
                  }}
                >
                  Women
                </li>
              </div>
              <div
                className="list-item"
                onClick={() => {
                  setNavActive(4);
                }}
                onMouseEnter={() => {
                  setNavHover(4);
                }}
                onMouseLeave={() => {
                  setNavHover(0);
                }}
              >
                <li
                  style={{
                    borderBottom:
                      navActive === 4 || navHover === 4
                        ? "4px solid hsl(26, 100%, 55%)"
                        : "none",
                    marginBottom: navActive === 4 ? "-4px" : "none",
                  }}
                >
                  About
                </li>
              </div>
              <div
                className="list-item"
                onClick={() => {
                  setNavActive(5);
                }}
                onMouseEnter={() => {
                  setNavHover(5);
                }}
                onMouseLeave={() => {
                  setNavHover(0);
                }}
              >
                <li
                  style={{
                    borderBottom:
                      navActive === 5 || navHover === 5
                        ? "4px solid hsl(26, 100%, 55%)"
                        : "none",
                    marginBottom: navActive === 5 ? "-4px" : "none",
                  }}
                >
                  Contact
                </li>
              </div>
            </div>
          </div>
          <div className="cart-info">
            <div className="cart" onClick={handleCart}>
              <img src="../images/icon-cart.svg" alt="" />
              {count > 0 && <div className="item-number">{count}</div>}
            </div>
            <div className="profile">
              <img src="../images/image-avatar.png" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
