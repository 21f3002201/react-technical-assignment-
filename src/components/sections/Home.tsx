import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { PLATFORM_STATS } from "../../utils/constants";

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Animated headline keywords
  const keywords = ["Smarter", "Faster", "Fairer", "Efficient"];
  const [currentKeyword, setCurrentKeyword] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-purple-50 to-purple-200 py-20 lg:py-32 overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute right-0 top-0 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-purple-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
                Your Gateway to Smarter Hiring
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 mb-6 leading-tight">
              Elevate Your Recruitment With
              <span className="text-purple-500 mx-2 animate-pulse">{keywords[currentKeyword]}</span>
              <span className="text-purple-300">Solutions</span>
            </h1>

            <p className="text-lg text-purple-600 mb-8 leading-relaxed max-w-2xl">
              Experience a new era of hiring—where speed, fairness, and insight come together to help you build exceptional teams.
            </p>

            <div className="flex flex-row gap-6 justify-start lg:justify-start mb-12 mt-8">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg px-8 text-lg"
                onClick={() => navigate("/jobs")}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-700 bg-white hover:bg-purple-50 shadow px-8 text-lg"
                // onClick: add demo modal later
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration & Stats */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            {/* Hero Icon */}
            <div className="w-24 h-24 mb-4 hidden lg:flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 rounded-full shadow-lg">
              <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" strokeWidth="4" stroke="currentColor" fill="white" />
                <path d="M16 32c0-4 8-4 8 0" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <circle cx="28" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {PLATFORM_STATS.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-lg border text-center transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-purple-50 border-purple-200`}
                >
                  <div className={`text-3xl font-bold mb-2 text-purple-700`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium text-purple-600`}>
                    {stat.label}
                  </div>
                  <div className="mt-4 text-xs text-purple-400">
                    {index === 0
                      ? "Thousands of users trust our platform to transform their hiring experience."
                      : "Join 100+ organizations building their future with us."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12">
          <span className="animate-bounce text-purple-500 text-3xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
