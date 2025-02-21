import React from "react";
import { Search } from "lucide-react";

const landPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Gamers' Lab</h1>
        <div className="flex gap-4">
          <button className="bg-transparent text-white px-4 py-2">Login</button>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">Sign Up</button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-800">
        <h2 className="text-4xl font-bold mb-4">Welcome to Gamers’ Lab</h2>
        <p className="text-lg max-w-2xl mx-auto">The ultimate hub for sharing tips, tricks, and fixes for all your favorite games.</p>
        
        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-1/2">
            <input type="text" placeholder="Search for guides, tips, or fixes..." className="w-full pl-10 py-2 text-black rounded-lg" />
            <Search className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>
      </header>
      
      {/* Features Section */}
      <section className="py-10 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Share Your Knowledge</h3>
          <p className="mt-2">Post articles, guides, and fixes to help fellow gamers.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Vote & Comment</h3>
          <p className="mt-2">Upvote the best content and engage in discussions.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Earn Rewards</h3>
          <p className="mt-2">Gain points, badges, and rank up as a top contributor.</p>
        </div>
      </section>
      
      {/* Call to Action */}
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold">Join the Community Today!</h3>
        <p className="mt-2">Start contributing and leveling up your gaming knowledge.</p>
        <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg">Get Started</button>
      </div>
    </div>
  );
};

export default landPage;
