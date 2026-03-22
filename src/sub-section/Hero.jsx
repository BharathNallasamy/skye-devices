import React from "react";
import heroImage from "../images/Hero.png";

const Hero = () => {
  return (
    <section className="bg-white">

      <div className="w-[90%] max-w-[1800px] mx-auto py-[clamp(40px,6vh,80px)]">

        <div className="hidden md:block relative rounded-[2vw] overflow-hidden shadow-lg aspect-[16/9]">

          <img
            src={heroImage}
            alt="Meditation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full flex items-center px-[5vw]">

            <div className="max-w-[45%] text-white">

              <div className="flex items-center gap-[1vw] mb-[2vh]">
                <span className="text-[clamp(14px,1vw,20px)]">★★★★★</span>
                <p className="text-[clamp(12px,1vw,18px)] font-medium">
                  Loved by professionals & students
                </p>
              </div>

              <h1 className="text-[clamp(28px,3vw,70px)] font-semibold leading-[1.05] mb-[2vh]">
                Micro-meditation for better
                <br />
                mental health.
              </h1>

              <p className="text-[clamp(14px,1.2vw,22px)] text-gray-200 leading-relaxed mb-[3vh]">
                From improving focus and productivity to reducing stress,
                Skye keeps you at your best throughout the day.
              </p>

              <button className="flex items-center gap-[1vw] bg-white text-black px-[2vw] py-[1.5vh] rounded-full text-[clamp(14px,1vw,20px)] font-medium shadow-xl">
                <span className="bg-gray-200 rounded-full p-[0.8vw] text-[clamp(10px,0.8vw,16px)]">
                  ▶
                </span>
                <span>How it works?</span>
              </button>

            </div>

          </div>
        </div>

        <div className="md:hidden">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={heroImage}
              alt="Meditation"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-6">

            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">★★★★★</span>
              <p className="text-sm font-medium text-gray-700">
                Loved by professionals & students
              </p>
            </div>

            <h1 className="text-3xl font-semibold leading-tight mb-3">
              Micro-meditation for better mental health.
            </h1>

            <p className="text-gray-600 leading-relaxed mb-5">
              From improving focus and productivity to reducing stress,
              Skye keeps you at your best throughout the day.
            </p>

            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
              <span className="bg-white text-black rounded-full px-2 py-[2px]">
                ▶
              </span>
              How it works?
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;