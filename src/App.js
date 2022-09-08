import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import PhishingDetector from "./pages/phishingDetector";
import PhishingSimulation from "./pages/phishingSimulation";
import PastData from "./pages/pastData";
import Navbar from "./components/homeComponents/Navibar";
import About from "./pages/about";
import ScrollToTop from "./components/scroll";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/** Drawer */}
      <Navbar />
      {/** Routes to navigate to different pages */}
      <Routes>
        <Route exact path="/pastData" element={<PastData />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/phishingDetector" element={<PhishingDetector />} />
        <Route
          exact
          path="/phishingSimulation"
          element={<PhishingSimulation />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      ;
    </Router>
  );
}
