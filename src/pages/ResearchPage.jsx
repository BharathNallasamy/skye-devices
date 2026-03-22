import Footer from "../components/Footer";

export default function ResearchPage() {
  return (
    <>
      <section className="bg-white">

        <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">

          <h1 className="text-[clamp(30px,3vw,46px)] font-semibold text-gray-900 mb-[clamp(30px,4vh,50px)]">
            Resource
          </h1>

          <div className="max-w-[850px] text-gray-700 text-[clamp(16px,1.05vw,18px)] leading-[1.85] space-y-6">

            <p>
              Meditation supports better mental health, but in today’s fast-moving
              world, finding the time or a quiet space to sit and practice is not
              always easy. That is where micro-meditation comes in. As reflected in
              ancient Indian literature, the mind is trained through repeated
              returns to awareness.
            </p>

            <p>
              Micro-meditation brings the benefits of meditation such as improved
              focus, sustained attention, better productivity, and reduced stress
              into your day through short, intentional pauses taken again and again.
              These small resets help the mind return to the present and stay attentive.
            </p>

            <p>
              Skye supports this practice as a standalone timer that gently vibrates
              at user-set intervals. Each vibration is a simple reminder to pause,
              take three deep breaths, observe, and continue your work.
            </p>

          </div>

          <div className="mt-[clamp(80px,10vh,140px)]">

            <h2 className="text-center text-gray-900 font-semibold text-[clamp(20px,1.6vw,24px)] mb-[clamp(40px,5vh,60px)]">
              Videos
            </h2>

            <div className="grid md:grid-cols-2 gap-[clamp(24px,3vw,40px)]">

              {[1,2,3,4].map((video) => (
                <div
                  key={video}
                  className="bg-gray-200 rounded-[20px] p-4"
                >
                  <div className="bg-[#2A2A2A] rounded-[16px] aspect-video w-full"></div>
                </div>
              ))}

            </div>

          </div>

          <div className="mt-[clamp(90px,12vh,160px)]">

            <h2 className="text-center text-gray-900 font-semibold text-[clamp(20px,1.6vw,24px)] mb-[clamp(40px,5vh,60px)]">
              Research Articles
            </h2>


            <div className="space-y-[clamp(25px,3vh,40px)]">

              <div className="bg-[#2B2B2B] text-white rounded-[28px] px-[clamp(24px,4vw,60px)] py-[clamp(30px,4vh,50px)]">

                <h3 className="text-[clamp(18px,1.6vw,24px)] font-semibold mb-4">
                  4. The feeling of the passage of time against the time of the external clock
                </h3>

                <p className="text-gray-300 text-[clamp(14px,1vw,16px)]">
                  Link to full article:
                  <a
                    href="https://doi.org/10.1016/j.concog.2023.103535"
                    target="_blank"
                    className="underline ml-2 text-gray-200 hover:text-white"
                  >
                    https://doi.org/10.1016/j.concog.2023.103535
                  </a>
                </p>

              </div>

              <div className="bg-[#2B2B2B] text-white rounded-[28px] px-[clamp(24px,4vw,60px)] py-[clamp(30px,4vh,50px)]">

                <h3 className="text-[clamp(18px,1.6vw,24px)] font-semibold mb-4">
                  5. The feeling of the passage of time against the time of the external clock
                </h3>

                <p className="text-gray-300 text-[clamp(14px,1vw,16px)]">
                  Link to full article:
                  <a
                    href="https://doi.org/10.1016/j.concog.2023.103535"
                    target="_blank"
                    className="underline ml-2 text-gray-200 hover:text-white"
                  >
                    https://doi.org/10.1016/j.concog.2023.103535
                  </a>
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}