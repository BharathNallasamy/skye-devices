import { useState } from "react";
import front from "../images/shop/one.png";
import specs from "../images/shop/two.png";
import Footer from "../components/Footer";


export default function ShopPage() {

  const images = [front, front, front, front];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <>
      <section className="bg-white">

        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">

          <div className="grid lg:grid-cols-2 gap-[clamp(40px,6vw,100px)] items-start">

            <div>

              <div className="rounded-[26px] overflow-hidden border border-gray-200">

                <img
                  src={activeImage}
                  alt="Skye Device"
                  className="w-full object-cover transition duration-300"
                />

              </div>

              <div className="flex gap-4 mt-6">

                {images.map((img, index) => (

                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`rounded-lg overflow-hidden border transition 
                    ${activeImage === img
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-400"
                      }`}
                  >

                    <img
                      src={img}
                      alt="product thumbnail"
                      className="w-[70px] h-[70px] object-cover"
                    />

                  </button>

                ))}

              </div>

            </div>

            <div className="max-w-[500px]">

              <h1 className="text-[clamp(26px,2vw,34px)] font-semibold text-gray-900">
                Skye Devices – The Nudge
              </h1>


              <p className="mt-4 text-gray-600 leading-relaxed text-[clamp(15px,1vw,17px)]">
                Skye is a small, portable timer made for micro-meditation.
                Up to 30 days on a single charge. Built for meditation on the go,
                Skye gently reminds you to pause, breathe, and reset throughout your day.
                Choose from four modes to match your rhythm.
              </p>

              <div className="mt-8">

                <p className="text-2xl font-semibold text-gray-900">
                  Rs. 4900.00
                </p>

                <p className="text-gray-500 text-sm mt-1">
    Rs. 4100 + (<span className="text-red-500 font-medium">18% GST</span>)
  </p>

              </div>

              <div className="mt-6">

                <a
  href="https://rzp.io/rzp/skyeone"
  
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
>
  Buy now
</a>

              </div>


              <p className="text-gray-500 text-sm mt-4">
                Current delivery time: 12–18 working days.
              </p>

            </div>

          </div>

          <div className="mt-[clamp(100px,12vh,160px)]">

            <h2 className="text-[clamp(20px,1.6vw,24px)] font-semibold text-gray-900 mb-8">
              Product Specifications
            </h2>

            <div className="border-t border-gray-200 pt-10 flex justify-center">

              <img
                src={specs}
                alt="Product specifications"
                className="w-full max-w-[800px]"
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}