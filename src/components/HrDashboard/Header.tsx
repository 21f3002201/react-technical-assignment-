import React, { useState, useEffect, useRef } from "react";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Clear any stored data if needed
    localStorage.clear();
    // Navigate to landing page
    navigate("/");
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer"
          >
            <Logo />
          </div>

            <div className="flex items-center space-x-6">
              {/* Notification, Chat, Gear */}
              <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <button className="text-purple-700 hover:text-purple-500 font-medium transition-colors duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                {/* Chat Icon */}
                <button className="text-purple-700 hover:text-purple-500 font-medium transition-colors duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.582 15.847 3 14.071 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
                {/* Gear Icon */}
                <button className="text-purple-700 hover:text-purple-500 font-medium transition-colors duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7zm7.03-2.11a1 1 0 00.21 1.09l1.43 1.43a1 1 0 01-1.42 1.42l-1.43-1.43a1 1 0 00-1.09-.21 7.03 7.03 0 01-2.11.88c-.14.03-.28.05-.42.05a1 1 0 00-.99.99v2.02a1 1 0 01-2 0v-2.02a1 1 0 00-.99-.99c-.14 0-.28-.02-.42-.05a7.03 7.03 0 01-2.11-.88 1 1 0 00-1.09.21l-1.43 1.43a1 1 0 01-1.42-1.42l1.43-1.43a1 1 0 00.21-1.09 7.03 7.03 0 01-.88-2.11c-.03-.14-.05-.28-.05-.42a1 1 0 00-.99-.99H4.98a1 1 0 010-2h2.02a1 1 0 00.99-.99c0-.14.02-.28.05-.42a7.03 7.03 0 01.88-2.11 1 1 0 00-.21-1.09L6.18 6.18a1 1 0 011.42-1.42l1.43 1.43a1 1 0 001.09.21 7.03 7.03 0 012.11-.88c.14-.03.28-.05.42-.05a1 1 0 00.99-.99V4.98a1 1 0 012 0v2.02a1 1 0 00.99.99c.14 0 .28.02.42.05a7.03 7.03 0 012.11.88 1 1 0 001.09-.21l1.43-1.43a1 1 0 011.42 1.42l-1.43 1.43a1 1 0 00-.21 1.09 7.03 7.03 0 01.88 2.11c.03.14.05.28.05.42a1 1 0 00.99.99h2.02a1 1 0 010 2h-2.02a1 1 0 00-.99.99c0 .14-.02.28-.05.42a7.03 7.03 0 01-.88 2.11z"
                    />
                  </svg>
                </button>
              </div>

            {/* HR Profile Accordion */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-3 text-purple-700 hover:text-purple-500 transition-colors duration-200 p-2 rounded-lg hover:bg-purple-50"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-base font-semibold text-purple-900">Hiring Lead</p>
                  <p className="text-sm text-purple-700 font-medium">abhishek@example.com</p>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-purple-900">
                          Hiring Lead
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          abhishek@example.com
                        </p>
                        <p className="text-xs text-purple-600 font-medium">
                          Abhishek
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Profile Settings</span>
                    </button>

                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Preferences</span>
                    </button>

                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Help & Support</span>
                    </button>
                  </div>

                  {/* Logout Section */}
                  <div className="border-t border-gray-100 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center space-x-3"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          {/* <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
          </button> */}
        </div>

        {/* Mobile Navigation
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {HR_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors duration-200 px-2 py-1 ${
                    location.pathname === link.href
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
