import React from "react";
import Button from "../ui/Button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div>
            <div className="mb-8">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
                Why Choose Us?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
              Build Your Team With Confidence & Clarity
            </h2>

            <p className="text-lg text-purple-600 mb-8 leading-relaxed">
              Our platform gives you the tools to connect, evaluate, and grow your workforce with transparency and speed.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 mb-1">
                    Fast, Frictionless Recruitment
                  </h3>
                  <p className="text-purple-500">
                    Accelerate your hiring with smart automation and instant candidate insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 mb-1">
                    Actionable Analytics
                  </h3>
                  <p className="text-purple-500">
                    Unlock workforce trends and performance with real-time dashboards and reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-700 mb-1">
                    Inclusive & Unbiased Hiring
                  </h3>
                  <p className="text-purple-500">
                    Foster diversity and fairness with built-in bias reduction and inclusive workflows.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              About Us
            </Button>
          </div>

          {/* Right Content - Placeholder for illustration/image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-purple-500 text-sm">
                    Platform Overview Illustration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
