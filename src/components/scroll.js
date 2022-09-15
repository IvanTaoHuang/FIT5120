import React, { useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./scroll.css";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";

const ScrollToTop = () => {
  //Breakpoints
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:650px)");

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <ArrowCircleUpIcon
          className="icon-position icon-style"
          onClick={goToTop}
          sx={{ fontSize: matches ? 30 : 50 }}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
