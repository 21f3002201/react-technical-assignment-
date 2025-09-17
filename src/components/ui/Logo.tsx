import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeStyles = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mr-3">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 7V6a4 4 0 118 0v1h1a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1zm2-1a2 2 0 114 0v1H8V6zm-3 3v6a1 1 0 001 1h10a1 1 0 001-1V9a1 1 0 00-1-1H5a1 1 0 00-1 1z" />
          </svg>
        </div>
      </div>
        <span className={`font-bold text-purple-700 ${sizeStyles[size]}`}>
          A.K Hiring Platform
        </span>
    </div>
  );
};

export default Logo;
