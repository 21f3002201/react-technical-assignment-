import React from "react";
import HomeSection from "../components/sections/Home";
import Layout from "../components/layout/Layout";

const Home: React.FC = () => (
  <Layout>
    {/* Intro section from Landing */}
    <section className="py-12 bg-gradient-to-r from-purple-100 to-pink-100 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">Welcome to Your Next Hiring Revolution</h1>
        <p className="text-lg text-purple-600 mb-6">Discover a smarter way to connect with top talent, streamline your recruitment, and build diverse teams for the future.</p>
        <span className="inline-block bg-purple-200 text-purple-700 px-4 py-2 rounded-full font-semibold">Empowering HR, One Hire at a Time</span>
      </div>
    </section>
    <HomeSection />
  </Layout>
);

export default Home;
