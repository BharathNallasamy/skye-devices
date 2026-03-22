import workImage from "../images/about/one.png";
import surveyImage from "../images/about/two.png";
import prototypeImage from "../images/about/three.png";
import deviceImage from "../images/about/four.png";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">

        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,160px)]">

          <h1 className="text-[clamp(32px,3vw,48px)] font-semibold text-gray-900 mb-[clamp(40px,6vh,70px)]">
            About
          </h1>

          <div className="max-w-[900px] text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

            <p>
              Skye began with a problem we were facing ourselves. We were struggling to focus.
              Our attention felt shorter. Work felt heavier. Stress felt normal. Every day there
              were more things competing for our attention than ever before. Phones,
              notifications, emails, and conversations. Staying calm and focused was getting harder.
            </p>

            <p>
              We tried productivity apps like
              <span className="text-orange-500 underline ml-1">Opal</span>,
              <span className="text-orange-500 underline ml-1">Freedom</span>,
              and
              <span className="text-orange-500 underline ml-1">Forest</span>.
              Some helped for a while, but the effect did not last. Most of them focused on
              reducing screen time. We realized the problem was deeper.
              Attention cannot be restored just by blocking apps. It needs to be trained.
            </p>

          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(40px,6vw,80px)] mt-[clamp(60px,10vh,120px)] items-start">

            <div className="text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

              <p>
                Meditation has always helped people improve focus and reduce stress.
                But today, people don’t have the time for it. It was the major reason why
                people avoid meditation.
              </p>

              <p>
                While exploring this, we discovered micro-meditation.
                A simple practice of taking small, intentional pauses during the day using
                an anchor like the breath.
              </p>

              <p>
                Pause. Breathe. Return to work.
                This repeated over time gently trains the mind to come back to the present
                without stepping away from their daily routine.
              </p>

              <p>
                Before building anything, we wanted to validate the idea.
                We ran an online survey with more than 700 people across ages and professions.
                The message was clear. Mental fatigue is common. Sustained attention is
                difficult. People want something practical that fits into real life.
              </p>

            </div>

            <img
              src={workImage}
              alt="Skye development"
              className="w-full rounded-[24px] object-cover"
            />

          </div>

          <div className="mt-[clamp(80px,12vh,140px)]">
            <img
              src={surveyImage}
              alt="Focus project survey"
              className="w-full rounded-[26px] object-cover"
            />
          </div>

          <div className="max-w-[900px] mt-[clamp(60px,10vh,120px)] text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

            <p>
              Skye was started in February 2025 by Akash, Barath and Veera.
              We all studied electronics engineering together and shared the same
              frustration with how modern technology captures attention, influences
              behaviour, and keeps people hooked.
            </p>

            <p>
              Since distractions are constant, we believed micro-meditation needed
              a reliable anchor — something separate with a clear, standalone purpose.
              So we built one.
            </p>

            <p>
              A simple device that is not linked to your phone or the internet,
              and gently vibrates at set intervals. Each vibration reminds you
              to pause, take three deep breaths, and return to what you were doing.
            </p>

          </div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-[clamp(40px,6vw,80px)] mt-[clamp(80px,12vh,140px)] items-center">

            <img
              src={prototypeImage}
              alt="Prototype"
              className="w-full rounded-[24px] object-cover"
            />

            <div className="text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

              <p>
                By early May 2025, we built our first prototype with a 3D printed case
                and a 15 minute vibration cycle. We tested it across different users.
                The feedback was encouraging.
              </p>

              <p>
                Building hardware in India is challenging, but we wanted Skye to be
                made here. Rooted in traditional meditation practices and built with
                modern engineering standards.
              </p>

              <p>
                We focused on durability and responsibility.
                E-waste is a growing problem, so we removed the USB-C charging cable.
                Skye only needs charging once a month.
              </p>

            </div>

          </div>

          <div className="max-w-[900px] mt-[clamp(80px,12vh,140px)] text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

            <p>
              We also wanted to challenge the idea that electronics made in India
              are less reliable. We use high-quality components sourced globally.
              Our PCBs are custom made in-house. The anodised aluminium body
              is built to last.
            </p>

            <p>
              We believe tools that improve focus and mental health should be
              accessible. They should not be expensive, complicated, or exclusive.
              Skye is made in small batches with honest pricing and thoughtful design.
            </p>

          </div>

          <div className="mt-[clamp(80px,12vh,140px)]">
            <img
              src={deviceImage}
              alt="Skye device"
              className="w-full rounded-[26px] object-cover"
            />
          </div>

          <div className="max-w-[700px] mt-[clamp(60px,10vh,100px)] text-[clamp(16px,1.1vw,18px)] text-gray-700 leading-[1.8] space-y-6">

            <p>
              Skye is not just another electronic product. It is a simple way
              to return to the present moment, again and again.
              And this is only the beginning.
            </p>

            <p>
              Much love,<br/>
              Skye
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}