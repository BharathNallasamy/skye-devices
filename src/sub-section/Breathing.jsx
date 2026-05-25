import React from "react";
import breathing from "../images/Breathing.png"


const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="7" width="20" height="11" rx="2" />
        <path d="M22 11h1a1 1 0 0 1 0 3h-1" />
        <path d="M7 7V5a2 2 0 0 1 4 0v2" />
        <path d="M6 11h8" />
      </svg>
    ),
    text: "Up to 14 days of battery life",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 16h4" />
        <path d="M12 2v4" />
        <circle cx="17" cy="19" r="3" fill="currentColor" stroke="none" />
        <path d="M15.5 19l1 1 2-2" stroke="white" strokeWidth={1.5} fill="none" />
      </svg>
    ),
    text: "Full charge in 2 hours via USB-c cable",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    text: "Built to last, backed by a 1-year warranty",
  },
];

export default function BreathingSection() {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row overflow-hidden" style={{ minHeight: "75vh" }}>
      {/* Left: Image — flush to left edge, no margin/padding, fills full height */}
      <div className="w-full md:w-[45%] flex-shrink-0 h-64 sm:h-80 md:h-auto">
        <img
          src={breathing}
          alt="Skye breathing device held in a hand"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content — centered vertically, padded */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 px-8 sm:px-12 lg:px-16 py-10 md:py-0">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-snug tracking-tight max-w-lg">
          Screen-free, calming breathing exercises, anytime, anywhere.
        </h2>

        {/* Body */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
          We deliberately kept technology in the background. Skye emits no
          Bluetooth or WiFi signals, creating a calm, distraction-free
          experience. Designed to feel intuitive and non-intrusive, it helps
          you focus on relaxation, not screens or technology.
        </p>

        {/* Feature List */}
        <ul className="flex flex-col gap-5 mt-2 w-full max-w-lg">
          {features.map(({ icon, text }, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-400 text-amber-900 flex items-center justify-center shadow-sm">
                {icon}
              </span>
              <span className="text-gray-800 text-base sm:text-lg font-medium">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}