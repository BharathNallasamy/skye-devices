import React from "react";
import ancientImage from "../images/AncientIndia.jpeg";

const AncientIndia = () => {
  return (
    <section className="bg-[#FAFAFA] py-[clamp(80px,12vh,220px)]">
      <div className="relative w-full h-[clamp(300px,50vh,700px)] overflow-hidden">
        <img
          src={ancientImage}
          alt="Ancient India Meditation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-md px-[clamp(30px,4vw,100px)] py-[clamp(14px,2vh,30px)] rounded-full shadow-xl">
            <h2 className="text-[clamp(22px,2.5vw,48px)] font-semibold text-gray-800 text-center">
              Micro-Meditation in Ancient India
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[92%] max-w-[1400px] mx-auto pt-[clamp(60px,10vh,180px)]">
        <p className="text-[clamp(16px,1.3vw,22px)] text-gray-700 leading-relaxed mb-[clamp(30px,4vh,60px)]">
          Micro-meditation is not a new concept.{" "}
          <span className="font-semibold">
            In the Yoga Sutras of Patanjali
          </span>, a foundational Sanskrit text dated between the 2nd century BCE
          and 4th century CE, on classical yoga philosophy and psychology,
          Sage Patanjali explains that mastery over attention and focus begins
          with small, repeated returns to awareness. Attention is trained by
          gently bringing a distracted mind back to a single point of focus,
          again and again.
        </p>

        <p className="text-[clamp(16px,1.3vw,22px)] text-gray-700 leading-relaxed">
          This is what micro-meditation with Skye is all about. Every vibration
          becomes a simple point of focus, bringing the mind back again and again
          to the present moment.
        </p>
      </div>
    </section>
  );
};

export default AncientIndia;