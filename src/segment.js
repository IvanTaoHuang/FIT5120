import React from "react";
import "./segment.css";
import SegmentItem from "./segmentItem";

function Segment() {
  return (
    <div className="segments">
      <h1>Check out these features of the website!</h1>
      <div className="segments__container">
        <div className="segments__wrapper">
          <ul className="segments__items">
            <SegmentItem
              src="images/img-1.png"
              text="Get to know about what we are doing"
              label="About"
              path="/about"
            />
            <SegmentItem
              src="images/img-2.jpg"
              text="Know about various scams through data visualisation"
              label="Know about Scams"
              path="/pastData"
            />
          </ul>

          {/* <ul className="segments__items">
            <SegmentItem
              src="images/img-2.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <SegmentItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <SegmentItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Segment;
