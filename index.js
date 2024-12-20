import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Top Navigation */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="bg-[#A0FC90] px-4 py-1.5 rounded-lg animate-fade-in">
          <span className="font-bold text-slate-900">NRRTVE</span>
        </div>
        <button className="bg-[#A0FC90] w-8 h-8 rounded-full flex items-center justify-center animate-fade-in">
          <span className="transform hover:scale-110 transition-transform">✓</span>
        </button>
      </div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="bg-gradient-to-br from-[#A0FC90] to-[#77FA60] rounded-3xl p-12 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Membership Badge */}
          <div className="inline-block bg-white rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
            <span className="text-slate-900 text-sm">Join 15,000+ investors.</span>
          </div>
          {/* Main Text */}
          <div className="max-w-2xl">
            <h1 className="text-slate-900 text-5xl font-bold mb-6 animate-fade-in-up delay-100">
              Data-driven narrative
              <br />
              with no spin
            </h1>
            <p className="text-slate-700 text-lg mb-8 animate-fade-in-up delay-200">
              Weekly emails packed full with the latest insights and
              market info to help you stay ahead of the game.
            </p>
            {/* Subscribe Form */}
            <div className="flex gap-3 animate-fade-in-up delay-300">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border border-transparent bg-white focus:outline-none focus:border-[#77FA60] transition-colors"
              />
              <button className="px-6 py-3 bg-[#77FA60] rounded-lg font-medium text-slate-900 hover:bg-[#A0FC90] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative Star */}
          <div className="absolute right-12 bottom-12 animate-spin-slow">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-600">
              <path
                fill="currentColor"
                d="M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
