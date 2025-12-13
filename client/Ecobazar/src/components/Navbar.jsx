import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import ProfilePage from "../pages/ProfilePage";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showProfile, setShowProfile] = useState(false); // profile drawer
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login state on mount and listen for storage changes
  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowProfile(false);
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-green-700">EcoBazaarX</h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
            <li>
              <Link to="/dashboard" className="hover:text-green-600">Home</Link>
            </li>
            <li>
              <a href="#services" className="hover:text-green-600">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-600">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600">Contact</a>
            </li>

            {isLoggedIn ? (
              <>
                {/* PROFILE BUTTON */}
                <button
                  onClick={() => setShowProfile(true)}
                  className="flex items-center gap-2 hover:text-green-600"
                >
                  <User size={20} /> Profile
                </button>

                {/* LOGOUT BUTTON */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Login
              </Link>
            )}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
            <a href="#services" className="block hover:text-green-600">Services</a>
            <a href="#about" className="block hover:text-green-600">About</a>
            <a href="#contact" className="block hover:text-green-600">Contact</a>

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    setShowProfile(true);
                    setIsOpen(false);
                  }}
                  className="block text-left w-full hover:text-green-600"
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block bg-green-600 text-white py-2 text-center rounded-lg hover:bg-green-700"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* -------------------------------- */}
      {/* PROFILE DRAWER */}
      {/* This is where ProfilePage drawer is used */}
      <ProfilePage
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </>
  );
}
