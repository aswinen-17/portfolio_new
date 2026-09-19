import React from 'react';
import project_1 from '../assets/project_1.png'
import project_3 from '../assets/project_3.png'
import project_2 from '../assets/project_2.png'

const projects = [
  {
    name: 'AI Finance Platform',
    title: (
      <>
        Finance{' '}
        <span className="font-light italic text-gray-300 lowercase font-serif">
          ai
        </span>
        <br />
        PLATFORM
      </>
    ),
    description:
      'A full-stack personal finance platform for tracking income, expenses, recurring transactions, budgets, and spending insights, with Gemini AI-powered receipt and bill scanning.',
    image: project_1,
    liveUrl: 'https://ai-finance-platform-e8hl.onrender.com',
    githubUrl: 'https://github.com/aswinen-17/Ai-finance-Platform',
  },

  {
    name: 'QuickShow',
    title: (
      <>
        QUICKSHOW
        <br />
        MOVIE BOOKING
      </>
    ),
    description:
      'A full-stack movie ticket booking platform with movie discovery, show details, seat selection, online payments, bookings, and an administrative dashboard.',
    image: project_3,
    liveUrl: 'https://quickshow-sand-alpha.vercel.app',
    githubUrl: 'https://github.com/aswinen-17/movie-ticket-booking',
  },

  {
    name: 'QuickAi',
    title: (
      <>
        QUICK
        <span className="font-light italic text-gray-300 lowercase font-serif">
          ai
        </span>
        <br />
        AI SAAS
      </>
    ),
    description:
      'A full-stack AI SaaS platform offering AI tools for article generation, blog titles, image generation, background removal, object removal, and resume analysis.',
    image: project_2,
    liveUrl: 'https://quickai-saas-platform.onrender.com',
    githubUrl: 'https://github.com/aswinen-17/QuickAi-SaaS-platform',
  },
];

const Project = ({ onCtaClick }) => {
  return (
    <div
      id="project"
      className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">
        {/* Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">
              work
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            A collection of full-stack projects built with modern technologies
            and focused on solving real-world problems.
          </p>

          <button
            onClick={onCtaClick}
            className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2"
          >
            Read More

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={proj.name}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center justify-between gap-12 lg:gap-16 w-full group`}
            >
              {/* Image */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                {/* Number */}
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>

                {/* Project Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Live Demo */}
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2"
                  >
                    Live Demo

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    GitHub

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;