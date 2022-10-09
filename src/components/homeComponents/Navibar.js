import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
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
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <Box width="30px"></Box>
          <Box
            sx={{
              backgroundColor: "black",
              height: "80px",
            }}
          >
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Box sx={{ marginTop: "10px" }}>
                CatchPhish &nbsp;
                <img src={require("../../images/logo.png")} width="35px"></img>
              </Box>
            </Link>
          </Box>
          <ul
            className={click ? "nav-menu1 active" : "nav-menu1"}
            style={{ display: click ? "block" : "none" }}
          >
            <li className="nav-item1">
              <Link to="/" className="nav-links1" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item1" style={{ marginTop: "-20px" }}>
              <Link
                to="/identify"
                className="nav-links1"
                onClick={closeMobileMenu}
              >
                IDENTIFY SCAMS
              </Link>
            </li>
            <li className="nav-item2" style={{ marginTop: "-20px" }}>
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Types of Scam
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Highlight of Past Phishing Scams
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                How to not fall for Scams
              </Link>
            </li>

            <li className="nav-item1" style={{ marginTop: "10px" }}>
              <Link
                to="/phishingDetector"
                className="nav-links1"
                onClick={closeMobileMenu}
              >
                PHISHING DETECTION
              </Link>
            </li>

            <li className="nav-item2" style={{ marginTop: "-20px" }}>
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Detector
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Common Signs of Phishing
              </Link>
            </li>
            <li className="nav-item1" style={{ marginTop: "20px" }}>
              <Link
                to="/report"
                className="nav-links1"
                onClick={closeMobileMenu}
              >
                REPORT SCAMS
              </Link>
            </li>
            <li className="nav-item2" style={{ marginTop: "-20px" }}>
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                About ScamWatch
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Report to ScamWatch
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Details required
              </Link>
            </li>
            <li className="nav-item1" style={{ marginTop: "20px" }}>
              <Link
                to="/phishingSimulation"
                className="nav-links1"
                onClick={closeMobileMenu}
              >
                SIMULATION
              </Link>
            </li>
            <li className="nav-item2" style={{ marginTop: "-20px" }}>
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Number of Reported Scams
              </Link>
            </li>
            <li className="nav-item2">
              <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                Scam Exposure
              </Link>
            </li>
          </ul>
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CatchPhish &nbsp;
            <i>
              <img src={require("../../images/logo.png")} width="35px"></img>
            </i>
          </Link> */}
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}
          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/identify"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                IDENTIFY SCAMS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/phishingDetector"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                DETECTOR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/report"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                REPORT TO SCAMWATCH
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/phishingSimulation"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SIMULATION
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
