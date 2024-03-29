import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import PhishingDetector from "./pages/phishingDetector";
import PhishingSimulation from "./pages/phishingSimulation";
import PastData from "./pages/pastData";
import Navbar from "./components/homeComponents/Navibar";
import About from "./pages/about";
import Identify from "./pages/identify";
import Report from "./pages/report";
import ScrollToTop from "./components/scroll";
import Signs from "./pages/signs";
import FirstSimulator from "./pages/firstSimulator";
import Hack from "./pages/hack";
import SimulationQuiz from "./pages/simulationQuiz";
import QuickExperience from "./pages/quickExperience";
import SimulationFeedback from "./pages/simulationFeedback";

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
        <Route exact path="/identify" element={<Identify />} />
        <Route exact path="/report" element={<Report />} />
        <Route exact path="/signs" element={<Signs />} />
        <Route exact path="/hack" element={<Hack />} />
        <Route exact path="/simulationQuiz" element={<SimulationQuiz />} />
        <Route exact path="/quickExperience" element={<QuickExperience />} />

        <Route
          exact
          path="/simulationFeedback"
          element={<SimulationFeedback />}
        />
        <Route
          exact
          path="/firstSimulator"
          element={<FirstSimulator />}
        ></Route>
        <Route
          exact
          path="/phishingSimulation"
          element={<PhishingSimulation />}
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
