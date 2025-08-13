import React from "react";
import { useState } from "react";
import ContactUs from "../../components/ContactUs";
import { sections } from "../../components/textilesContent";
import { Link } from "react-router-dom";
import pagesLinks from "../../data/pagesLinks";

const image1 =
  "https://static.wixstatic.com/media/7ab3a8_56062bf596204067b44aef8c221474b2~mv2.png/v1/fill/w_2219,h_965,fp_0.50_0.50,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_56062bf596204067b44aef8c221474b2~mv2.png";

export default function Textiles() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section
        className="h-[90vh] md:min-h-[80vh] max-h-screen object-contain w-screen bg-cover bg-left max-md:bg-center bg-no-repeat flex flex-col justify-center p-10 md:p-15"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="text-white flex flex-col gap-2 justify-start align-middle text-shadow-xl">
          <h1 className="text-5xl text-shadow-gray-900">Textiles</h1>
          <p className="text-xl text-shadow-gray-900">
            Comfort and technology in perfect harmony.
          </p>
          <Link
            to={pagesLinks.expertiseLinks.Textiles}
            className="hero-link max-w-max mt-5 bg-[#22a0af] px-10 py-3 hover:rounded-sm hover:px-15 transition-all duration-110 hover:bg-green-800"
          >
            Visit Site
          </Link>
        </div>
      </section>

      <section className="w-full py-15 px-5 bg-white mx-auto">
        <div className=" mx-auto md:max-w-[1600px]">
          <h1 className="text-3xl md:text-3xl font-bold mb-5">
            About Textiles
          </h1>
          <p className="text-lg md:text-xl">
            Anvi is India’s first AI-powered tailoring platform for men,
            combining technology with traditional craftsmanship to offer
            custom-made formal and ethnic wear. We aim to provide a seamless,
            personalized shopping experience that blends style, precision, and
            convenience.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-10 max-w-[1600px] m-auto mb-15">
        <div className="max-w-screen mx-auto">
          {/* Titles */}
          <div className="flex flex-wrap md:text-xl text-lg border-b ">
            {sections.map((sec, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`pb-2 border-b-2 text-center transition-all duration-100 w-1/3 cursor-pointer   ${
                  activeIndex === i
                    ? "border-grey-600 text-grey-600 font-semibold"
                    : "border-transparent text-gray-600 hover:text-gray-950"
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Description with fade-in */}
          <div key={activeIndex} className="mt-6 animate-fadeIn">
            <div className="leading-relaxed max-md:px-2 px-10">
              {sections[activeIndex].content}
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
