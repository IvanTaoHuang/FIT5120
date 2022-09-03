import React from "react";
import header from "./headerImage.jpeg"; 
import "./Header.css";

console.log(header); 

function Header() {
  // Import the URL of your image
  return (
    <img
      className="image"
      style={{
        width: "100%",
        height: "20vh",
      }}
      src={header}
      alt="Logo"
    />
  );
}

export default Header;
