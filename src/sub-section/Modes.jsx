import React, { useState } from "react";
import Device1 from "../images/Device2.png";
import Device2 from "../images/Device3.png";
import Device3 from "../images/Device4.png";
import Device4 from "../images/Device5.png";

const modes = [
  {
    id: 1,
    label: "Mode 1",
    name: "Morning Focus",
    duration: "5 min session",
    pattern: "4s inhale · 4s hold · 4s exhale · 4s hold",
    description:
      "A classic box breathing exercise designed to improve mindfulness, focus, and mental clarity. Ideal for starting your day feeling calm, clear, and centered.",
    bestUsed: "Soon after waking up",
    image: Device1,
  },
  {
    id: 2,
    label: "Mode 2",
    name: "Calm & Reset",
    duration: "5 min session",
    pattern: "4s inhale · 4s hold · 8s exhale · 2s hold",
    description:
      "A breathing rhythm with a slower exhale to help activate your body's natural relaxation response. Designed to ease stress, quiet anxiety, and bring a sense of calm within minutes.",
    bestUsed: "During stressful or anxious moments",
    image: Device2,
  },
  {
    id: 3,
    label: "Mode 3",
    name: "Sleep Basic",
    duration: "7 min session",
    pattern: "4s inhale · 2s hold · 6s exhale · 2s hold",
    description:
      "A gentle nighttime breathing exercise designed to help your body slow down and transition into rest. Perfect for unwinding after a busy day and preparing your mind for sleep.",
    bestUsed: "Before bedtime to relax and fall asleep faster",
    image: Device3,
  },
  {
    id: 4,
    label: "Mode 4",
    name: "Sleep Advanced",
    duration: "12 min session",
    pattern: "4s inhale · 2s hold · 6s exhale · 2s hold",
    description:
      "An extended wind-down session for nights when falling asleep feels difficult. The longer duration helps calm racing thoughts, relax the nervous system, and ease you into deeper rest.",
    bestUsed: "When your mind feels restless before sleep",
    image: Device4,
  },
];

export default function BreathingModes() {
  const [activeMode, setActiveMode] = useState(0);
  const mode = modes[activeMode];

  return (
    <section
      className="w-full bg-white flex flex-col items-center justify-between px-4 sm:px-8 lg:px-16 py-12 sm:py-20"
      style={{ minHeight: "100vh" }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 text-center leading-snug tracking-tight max-w-2xl">
        Four guided slow breathing exercises for calm, focus, and sleep
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 text-base sm:text-lg text-center max-w-xl leading-relaxed">
        Simple guided breathing exercises designed with{" "}
        <a href="#" className="text-blue-500 underline underline-offset-2">
          research-backed
        </a>{" "}
        techniques to help you feel calmer, more focused, and sleep better.
      </p>

      {/* Mode Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-4xl">
        {modes.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setActiveMode(i)}
            className={`px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold border-2 transition-all duration-200 ${
              activeMode === i
                ? "bg-amber-400 border-amber-400 text-gray-900"
                : "bg-white border-gray-300 text-gray-800 hover:border-amber-300"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full max-w-4xl border-t border-gray-200" />

      {/* Mode Detail */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
        {/* Left: Device image + mode info */}
        <div className="flex flex-col items-center sm:items-start gap-3 flex-shrink-0 w-full sm:w-auto">
          <img
            src={mode.image}
            alt={`Skye Device Mode ${mode.id}`}
            className="w-36 sm:w-44 h-auto object-contain"
          />
          <p className="text-gray-900 text-sm sm:text-base text-center sm:text-left">
            <span className="font-bold">Mode {mode.id}:</span> {mode.name}
          </p>
          <p className="text-gray-900 text-sm sm:text-base text-center sm:text-left">
            <span className="font-bold">Duration:</span> {mode.duration}
          </p>
        </div>

        {/* Right: Description */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-900 text-base sm:text-lg">
            <span className="font-bold">Pattern:</span> {mode.pattern}
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {mode.description}
          </p>
          <p className="text-gray-900 text-base sm:text-lg">
            <span className="font-bold">Best used:</span> {mode.bestUsed}
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full max-w-4xl border-t border-gray-200" />
    </section>
  );
}