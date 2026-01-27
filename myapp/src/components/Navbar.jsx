import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png" // ✔ use public folder path
            alt="Company Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800">
          <Link to="/" className="block px-4 py-2">Home</Link>
          <Link to="/about" className="block px-4 py-2">About</Link>
          <Link to="/services" className="block px-4 py-2">Services</Link>
          <Link to="/contact" className="block px-4 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}