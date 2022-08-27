import "./NavigationBar.css";
import Button from "@mui/material/Button";

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstPage from "../PastData";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavigationBar() {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          centered
        >
          <LinkTab label="Home" href="/" />
          <LinkTab label="Phishing Detector" href="/trash" />
          <LinkTab label="Phishing Simulation" href="/spam" />
          <LinkTab label="Know more about scams" href="/drafts" />

          <Router>
            <ThemeProvider theme={theme}>
              <Button
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
                <Link to="/">Past Statistical Data</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="./FirstPage.js">Past Scam Articles</Link>
              </MenuItem>
            </Menu>
            <Routes>
              <Route path="./FirstPage.js" element={<FirstPage />}></Route>
            </Routes>
          </Router>
        </Tabs>
      </Box>
    </div>
  );
}

export default NavigationBar;
