import { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes,FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import {animateScroll} from "react-scroll"
import Cart from "../cart/Cart";
function Navbarr() {
  const [isMobile, setIsMobil] = useState(false);
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration:200
    });
  };

  return (
    <>
      <nav className="navbar">
        <span className="logo">Shopping</span>
        <ul 

          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => {
            setIsMobil(false);
          }}
        >
          <Link
            to="/"
            onClick={() => {
              setIsMobil(false);
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/all"
            onClick={() => {
              setIsMobil(false);
            }}
          >
            <li >All</li>
          </Link>
          <Link
            to="/men"
            onClick={() => {
              setIsMobil(false);
            }}
          >
            <li>men</li>
          </Link>
          <Link
            to="/women"
            onClick={() => {
              setIsMobil(false);
            }}
          >
            <li>women</li>
          </Link>
          <Link
            to="/kids"
            onClick={() => {
              setIsMobil(false);
            }}
          >
            <li>kids</li>
          </Link>
        </ul>
        <Cart/>

        <button
          className="mobile-menu-icon"
          onClick={() => {
            setIsMobil(!isMobile);
          }}
        >
          {isMobile ? <FaTimes /> : <FaBars />}

        </button>
      </nav>
      <span className="scrolltop" onClick={scrollToTop}> <FaArrowUp/></span>
    </>
  );

}

export default Navbarr;
