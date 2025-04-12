import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Body />
      <Footer />
      
      <Routes>
        {/* Routes will be added here as pages are created */}
      </Routes>
    </Router>
  );
}