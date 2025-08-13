import React from "react";

import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function About() {
  return (
    <>
      <section className="max-md:min-h-[50vh] place-content-center">
        <img
          src="https://static.wixstatic.com/media/7ab3a8_a81f515e03634af2b9b5780ce6cf45e8~mv2.png/v1/fill/w_1891,h_739,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_a81f515e03634af2b9b5780ce6cf45e8~mv2.png"
          alt=""
        />
      </section>

      <section className="bg-[#f4f4f4] p-5">
        <div className="border-t-2 relative border-gray-300 mt-10 p-3 pt-8 w-full max-md:mx-0 flex flex-col md:flex-row items-start justify-start gap-6">
          {/* Left Side Heading */}
          <div className="max-w-full md:max-w-[50%] w-full md:sticky top-0">
            <b className="text-4xl md:text-6xl block">Our Story</b>
          </div>

          {/* Right Side Content */}
          <div className="text-gray-900 max-w-full md:max-w-[50%] space-y-5 w-full p-3 text-lg md:text-xl">
            <b className="block mt-5">➤ ABOUT ANVI</b>

            <p>
              For too long, the future has been imagined in fragments — one
              breakthrough in isolation, one innovation at a time. But in a
              world as interconnected as ours, true transformation comes from
              convergence. That’s where Anvi begins.
            </p>

            <p>
              We are building a future where technology and humanity evolve
              together — where machines feel natural, stories inspire healing,
              power flows cleanly, and design uplifts everyday life.
            </p>

            <p>
              From labs and clean rooms to design studios and orbit, we are
              engineering for a tomorrow where innovation doesn’t just serve —
              it elevates. This is the beginning of a new civilization.
            </p>

            <img
              src="https://static.wixstatic.com/media/561197a90e6d4a6bb1cf92609952eb46.jpg/v1/fill/w_611,h_408,fp_0.43_0.39,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/In%20a%20Meeting.jpg"
              alt="In a Meeting"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] p-5">
        <div className="border-t-2 relative  border-gray-300 mt-10 p-3 pt-8  w-full max-md:mx-0 flex flex-col md:flex-row items-start justify-start gap-6">
          {/* Left Side Heading */}
          <div className="max-w-full md:max-w-[50%] w-full md:sticky top-0">
            <b className="text-4xl md:text-6xl block">We build for people</b>
          </div>

          {/* Right Side Content */}
          <div className="text-gray-900 max-w-full md:max-w-[50%] space-y-5 w-full p-3 text-lg md:text-xl">
            <b className="font-light text-gray-950">➤ WHO WE ARE</b>
            <p>
              Founded by a team of visionary leaders, scientists, creators, and
              engineers — including doctors, technologists, and entrepreneurs —
              Anvi stands as a multi-domain innovation powerhouse. Our mission
              is to design transformational products and platforms that solve
              real-world problems while setting new global benchmarks in
              quality, ethics, and imagination.
            </p>

            <b className="font-light">➤ OUR VISION</b>
            <p className="font-semibold">
              “To engineer the next civilization—intelligently, ethically,
              beautifully.”
            </p>
            <p>We are not here to fit into the future.</p>
            <p>We are here to build it.</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-20 py-20 rounded-t-[60px]">
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-start mb-20 leading-tight">
          Why are we different?
        </h2>

        {/* 2-column grid for features */}
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Block 1 */}
          <div className="border-t  border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">
              Interdisciplinary Innovation
            </h3>
            <p className="text-white/70">
              Each vertical fuels the other. Our space scientists collaborate
              with game designers. Our fashion line takes inspiration from
              robotics and motion.
            </p>
          </div>

          {/* Block 2 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">
              Made in India, Made for the World
            </h3>
            <p className="text-white/70">
              All of Anvi’s products are born in India, developed across our
              centers in India and the U.S., and built to compete on a global
              stage.
            </p>
          </div>

          {/* Block 3 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">
              Woman-led at the Core
            </h3>
            <p className="text-white/70">
              Co-founded by Dr. Neelima, a trailblazing doctor and entrepreneur,
              Anvi celebrates leadership that is inclusive, balanced, and bold.
            </p>
          </div>

          {/* Block 4 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">
              Human-First Philosophy
            </h3>
            <p className="text-white/70">
              Whether we’re building humanoids or storytelling engines,
              everything we create is centered around enhancing the human
              experience—emotionally, intelligently, and ethically.
            </p>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
