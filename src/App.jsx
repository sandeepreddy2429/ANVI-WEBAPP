import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Solution from "./pages/Solution.Jsx";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

import Robotics from "./pages/Expertise/Robotics";
import Space from "./pages/Expertise/Space";
import Semiconductors from "./pages/Expertise/Semiconductors";
import Entertainment from "./pages/Expertise/Entertainment";
import Energy from "./pages/Expertise/Energy";
import Textiles from "./pages/Expertise/Textiles";
import Manufacturing from "./pages/Expertise/Manufacturing";
import Lifesciences from "./pages/Expertise/Lifesciences";
import Foundation from "./pages/Expertise/Foundation";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="min-h-[calc(100vh-60px)] w-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Expertise subpages */}
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/space" element={<Space />} />
          <Route path="/semiconductors" element={<Semiconductors />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/textiles" element={<Textiles />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/lifesciences" element={<Lifesciences />} />
          <Route path="/foundation" element={<Foundation />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
