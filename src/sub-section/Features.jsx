import React from "react";
import calendarImage from "../images/BatteryLife.png";
import featuresBg from "../images/Flow.png";

const Features = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-[150vh] py-[clamp(120px,18vh,260px)]">

      <div className="w-[92%] max-w-[1600px] mx-auto text-center">

        <h2 className="text-[clamp(28px,3vw,60px)] font-semibold mb-[clamp(10px,2vh,20px)]">
          Everything you need. Nothing you don’t.
        </h2>

        <p className="text-[clamp(14px,1vw,18px)] text-gray-500 mb-[clamp(80px,12vh,180px)]">
          Features Built to Support You.
        </p>
        <div className="mb-[clamp(120px,16vh,260px)]">
          <div className="mx-auto w-[clamp(320px,70vw,1100px)]">
            <img
              src={calendarImage}
              alt="30 Day Battery Life"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* ===== FEATURE CARDS SECTION ===== */}
        <div className="relative rounded-[2vw] overflow-hidden py-[clamp(40px,6vh,100px)] px-[clamp(20px,5vw,100px)]">

          {/* Background */}
          <img
            src={featuresBg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-[clamp(20px,4vw,80px)]">

            {[
              "100% Charge in 2 Hours",
              "One Year Warranty",
              "Durable Aluminum Body",
              "One-Button Design"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1F1F1F] text-white py-[clamp(20px,3vh,40px)] px-[clamp(20px,3vw,40px)] rounded-[1.5vw] text-[clamp(14px,1vw,18px)] font-medium shadow-xl"
              >
                {feature}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;