import React from 'react';

const ComingSoon = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#ccff00] w-full px-4">

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-6 text-center">
        More Projects
      </h1>

      {/* Description */}
      <p className="text-white/70 text-sm md:text-lg text-center max-w-xl mb-8">
        Explore more of my full-stack projects, experiments, and development work on GitHub.
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/aswinen-17?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer px-8 py-3 rounded-full border border-[#ccff00] text-black bg-[#ccff00] font-bold text-sm md:text-base hover:bg-black hover:text-[#ccff00] transition-colors"
      >
        VIEW ALL PROJECTS
      </a>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="cursor-pointer mt-4 px-8 py-3 rounded-full border border-white/30 text-white font-bold text-sm md:text-base hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
      >
        GO BACK
      </button>

    </div>
  );
};

export default ComingSoon;