// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#d0000b] text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Børnelejren</h1>

        
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

       
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link to="/">Forside</Link></li>
          <li><Link to="/om-os">Om os</Link></li>
          <li><Link to="/tilmeld">Sponsor</Link></li>
          <li><Link to="/tak">Tak</Link></li>
        </ul>
      </div>

      
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-lg bg-[#d0000b]">
          <Link to="/" onClick={toggleMenu} className="block">Forside</Link>
          <Link to="/om-os" onClick={toggleMenu} className="block">Om os</Link>
          <Link to="/tilmeld" onClick={toggleMenu} className="block">Sponsor</Link>
          <Link to="/tak" onClick={toggleMenu} className="block">Tak</Link>
        </div>
      )}
    </nav>
  );
}
