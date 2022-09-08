import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MemoryRouter, Link, matchPath, useLocation } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
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

function Muidrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    // Tabs in the drawer
    return (
      <div>
        <Box>
          <Tabs
            value={currentTab}
            centered
            orientation="vertical"
            onChange={() => setIsDrawerOpen(false)}
          >
            <Tab label="Home" value="/" to="/" component={Link} />
            <Tab
              label="Phishing Detector"
              value="/phishingDetector"
              to="/phishingDetector"
              component={Link}
              disabled="true"
              onClick={() => setIsDrawerOpen(false)}
            />
            <Tab
              label="Phishing Simulation"
              value="/phishingSimulation"
              to="/phishingSimulation"
              component={Link}
              disabled="true"
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
  return (
    <Box>
      <Header />
      {/*Drawer icon */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      {/** Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{ style: { width: "20vw" } }}
      >
        <Header />
        <MyTabs />
      </Drawer>
    </Box>
  );
}
export default Muidrawer;
