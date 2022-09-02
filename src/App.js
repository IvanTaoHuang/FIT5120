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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { grey } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Fade from "@mui/material/Fade";
import Home from "./Home";
import PhishingDetector from "./PhishingDetector";
import PhishingSimulation from "./PhishingSimulation";
import PastData from "./PastData";
import PastArticle from "./PastArticle";
import Header from "./header/Header";

function homeRouter(props) {
  const { children } = props;
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
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/",
    "/PhishingDetector",
    "/PhishingSimulation",
    "fade-button",
    "PastData",
  ]);
  const currentTab = routeMatch?.pattern?.path;
  const theme = createTheme({
    palette: {
      primary: { main: grey[600] },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            value="/PhishingDetector"
            to="/PhishingDetector"
            component={Link}
          />
          <Tab
            label="Phishing Simulation"
            value="/PhishingSimulation"
            to="/PhishingSimulation"
            component={Link}
          />
          <Tab
            label="Know More"
            value="/PastData"
            to="/PastData"
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
        <Route exact path="/PastData" element={<PastData />} />
        <Route exact path="/PastArticle" element={<PastArticle />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/PhishingDetector" element={<PhishingDetector />} />
        <Route
          exact
          path="/PhishingSimulation"
          element={<PhishingSimulation />}
        />
      </Routes>
    </Router>
  );
}
