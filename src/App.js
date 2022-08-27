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
import KnowScams from "./KnowScams";
import PastData from "./PastData";
import PastArticle from "./PastArticle";

function Router(props) {
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

Router.propTypes = {
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
    "/home",
    "/PhishingDetector",
    "/PhishingSimulation",
    "/KnowScams",
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
      <Box>
        <Tabs value={currentTab} centered>
          <Tab label="Home" value="/home" to="/home" component={Link} />
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
            label="Know more about scams"
            value="/KnowScams"
            to="/KnowScams"
            component={Link}
          />

          <ThemeProvider theme={theme}>
            <Button
              value="fade-button"
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="primary"
              endIcon={<KeyboardArrowDownIcon />}
            >
              Dashboard
            </Button>
          </ThemeProvider>

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/PastData" value="PastData">
                Past Statistical Data
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/PastArticle">Past Scam Articles</Link>
            </MenuItem>
          </Menu>
        </Tabs>
      </Box>
    </div>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <MyTabs />
      <Routes>
        <Route exact path="/PastData" element={<PastData />} />
        <Route exact path="/PastArticle" element={<PastArticle />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/PhishingDetector" element={<PhishingDetector />} />
        <Route
          exact
          path="/PhishingSimulation"
          element={<PhishingSimulation />}
        />
        <Route exact path="/KnowScams" element={<KnowScams />} />
      </Routes>
    </Router>
  );
}
