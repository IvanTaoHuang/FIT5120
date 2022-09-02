import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Home from "./home";
import PhishingDetector from "./phishingDetector";
import PhishingSimulation from "./phishingSimulation";
import PastData from "./pastData";
import Header from "./header/Header";

function homeRouter(props) {
  const { children } = props;
  //Set the initial page
  if (typeof window === "undefined") {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/home"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

homeRouter.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // Match route to link value
  const routeMatch = useRouteMatch([
    "/",
    "/phishingDetector",
    "/phishingSimulation",
    "fade-button",
    "pastData",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  
// Show the navigation bar 
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
        }}
      >
        <Tabs value={currentTab} centered>
          <Tab label="Home" value="/" to="/" component={Link} />
          <Tab
            label="Phishing Detector"
            value="/phishingDetector"
            to="/phishingDetector"
            component={Link}
          />
          <Tab
            label="Phishing Simulation"
            value="/phishingSimulation"
            to="/phishingSimulation"
            component={Link}
          />
          <Tab
            label="Know More"
            value="/pastData"
            to="/pastData"
            component={Link}
          />

          
        </Tabs>
      </Box>
    </div>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <Header />
      <MyTabs />
      <Routes>
        <Route exact path="/pastData" element={<PastData />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/phishingDetector" element={<PhishingDetector />} />
        <Route
          exact
          path="/phishingSimulation"
          element={<PhishingSimulation />}
        />
      </Routes>
    </Router>
  );
}
