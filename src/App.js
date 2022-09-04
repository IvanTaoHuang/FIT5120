import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import PhishingDetector from "./phishingDetector";
import PhishingSimulation from "./phishingSimulation";
import PastData from "./pastData";
import Navbar from "./Navibar";
import About from "./about";

export default function App() {
  return (
    <Router>
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
