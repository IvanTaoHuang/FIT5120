import * as React from "react";
import { Helmet } from "react-helmet";
import BgImg from "./BgImg";
import Segment from "./segment";

function Home(props) {
  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://catchphish.org/home" />
          <meta name="description" content="Home" />
        </Helmet>
      <BgImg />
      <Segment />
    </>
  );
}

export default Home;
