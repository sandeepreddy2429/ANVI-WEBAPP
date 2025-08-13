import React from "react";
import { useState } from "react";
import ContactUs from "../../components/ContactUs";
import { Link } from "react-router-dom";
import pagesLinks from "../../data/pagesLinks";

export default function Space() {
  const tabs = [
    {
      title: "Satellite with Robotic Arm",
      image:
        "https://static.wixstatic.com/media/261091_66a2acc2ae584eea9b9d1cacd4a24dd3~mv2.jpg/v1/fill/w_504,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4a95fb3b-310f-4944-ab76-2a0964c9368a.jpg",
      heading: "“Clean orbits. Safer missions.”",
      text: "Our satellites use precision robotic arms for space debris removal and delicate in-orbit tasks, ensuring sustainable orbital environments.",
    },
    {
      title: "Autonomous Rovers",
      image:
        "https://static.wixstatic.com/media/261091_5ff9a5ae1b094fe99f613a63fe5472e8~mv2.jpg/v1/fill/w_504,h_354,al_c,lg_1,q_80,enc_avif,quality_auto/88f2604e-9235-41df-a04b-157feb566a4b.jpg", // replace with 2nd uploaded image link
      heading: "“Exploring beyond limits.”",
      text: "Our autonomous rovers are engineered to traverse uncharted terrain, perform research, and relay mission-critical data from distant worlds.",
    },
    {
      title: "AI in Space Solution",
      image:
        "https://static.wixstatic.com/media/261091_9beb33af38b34bea87aaf03e08b2572c~mv2.jpg/v1/fill/w_504,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b11b6144-f487-4483-b9bb-60db8209a464.jpg", // replace with 3rd uploaded image link
      heading: "“Intelligence among the stars.”",
      text: "We leverage AI for autonomous navigation, anomaly detection, and mission optimization to redefine deep space exploration.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section
        className="h-[90vh] md:min-h-[80vh] max-h-screen object-cover w-screen bg-cover bg-left max-md:bg-right bg-no-repeat flex flex-col justify-center p-10 md:p-15"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/7ab3a8_10c50fd261234f2b9ce365f9a465eac6~mv2.png/v1/fill/w_1891,h_823,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/4.png)",
        }}
      >
        <div className="text-white flex flex-col gap-2 justify-start align-middle text-shadow-xl">
          <h1 className="text-5xl text-shadow-gray-900">Anvi Space</h1>
          <p className="text-xl text-shadow-gray-900">
            Engineering the Future of Space
          </p>
          <Link
            to={pagesLinks.expertiseLinks.Space}
            className="hero-link max-w-max mt-5 bg-[#22a0af] px-10 py-3 hover:rounded-sm hover:px-15 transition-all duration-110 hover:bg-green-800"
          >
            Visit Site
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        {/* Title + Intro */}
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left py-10">
          <div className="w-full flex flex-col md:flex-row md:items-start md:justify-around">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-0 md:w-1/3">
              Our Mission
            </h2>
            <p className="text-gray-700 max-w-2xl md:w-1/2">
              To make space safer, smarter, and more scalable. With a focus on
              innovation and sustainability, we address the evolving needs of
              the global space ecosystem.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mt-8 w-full max-w-5xl m-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex sm:w-auto justify-center align-middle p-5 text-center cursor-pointer transition-all duration-200 ${
                activeTab === index
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Image + Text */}
        <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {tabs[activeTab].heading}
            </h3>
            <p className="text-gray-700 text-lg">{tabs[activeTab].text}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        {/* Top Border Line */}
        <div className="border-t-2 border-teal-400 max-w-6xl mx-auto px-4"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 mt-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-800 max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed">
            We’re redefining the future of space with smart engineering and
            purposeful innovation. Guided by precision, powered by AI, and
            driven by impact — we are committed to shaping a sustainable space
            future.
            <br />
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              to="contact"
              style={{ color: "white" }}
              className="bg-black-btn bg-black px-8 py-3 text-lg font-medium hover:bg-blue-300 transition-colors duration-200"
            >
              Join us as we launch what's next
            </Link>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
