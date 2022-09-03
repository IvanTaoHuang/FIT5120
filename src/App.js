import Muidrawer from "./drawer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import PhishingDetector from "./phishingDetector";
import PhishingSimulation from "./phishingSimulation";
import PastData from "./pastData";
export default function App() {
  return (
    <Router>
      {/** Drawer */}
      <Muidrawer />
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
      </Routes>
      ;
    </Router>
  );
}
