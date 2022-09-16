import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CatchPhish &nbsp;
            <i>
              <img src={require("../../images/logo.png")} width="35px"></img>
            </i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/phishingSimulation"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Phishing Simulation
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/phishingDetector"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Detector
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/pastData"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Know More
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
