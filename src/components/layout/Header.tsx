import React, { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <header className="bg-white shadow-lg border-b border-purple-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-20">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-purple-700 text-xl font-semibold tracking-wide px-2 py-1 transition-all duration-200 hover:text-purple-500 hover:underline underline-offset-8 decoration-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* HR Login Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() => navigate("/dashboard")}
            >
              HR Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-purple-700 hover:text-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-200">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-purple-700 hover:text-purple-500 font-medium transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => {
                    navigate("/dashboard");
                    setIsMenuOpen(false);
                  }}
                >
                  HR Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
