import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SponsorForm from "./pages/SponsorForm";
import ThankYou from "./pages/ThankYou";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <Router>
        <div className="relative">
    <div className="absolute inset-0 bg-stars animate-sparkle opacity-10 z-[-1]"></div>


      
        <Navbar/>

        <main className="max-w-screen-xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/om-os" element={<About />} />
            <Route path="/tilmeld" element={<SponsorForm />} />
            <Route path="/tak" element={<ThankYou />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
