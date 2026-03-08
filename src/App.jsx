import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import CorporatePage from "./pages/CorporatePage";
import FAQPage from "./pages/FAQ";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;