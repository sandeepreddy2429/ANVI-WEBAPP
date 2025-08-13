import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import pagesLinks from "../data/pagesLinks";
import { expertisesList } from "../data/expertisesList";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="bg-gray-50 text-white pt-10 pb-13 px-6 md:px-20 max-sm:px-5">
      <div className="flex justify-center md:justify-start max-w-[900px] w-full pb-8">
        <img
          src="https://static.wixstatic.com/media/261091_3dffa092b24a49678092350d6dab657b~mv2.png/v1/fill/w_1220,h_280,fp_0.50_0.48,q_85,enc_avif,quality_auto/anvi%20logo%20new_edited.png"
          alt="Anvi Logo"
          className="w-full max-w-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-md:gap-8 max-sm:gap-x-3 max-sm:gap-y-10">
        {/* Navigation Links */}
        <div className="space-y-2 text-sm text-left flex flex-col gap-0.5">
          <Link to={pagesLinks.about}>About</Link>
          <Link to={pagesLinks.solutions}>Solutions</Link>

          {/* Expertise Dropdown */}
          <span className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className=" text-black flex cursor-pointer justify-center outline-0 border-0 align-middle place-items-center gap-1"
              style={{ backgroundColor: "transparent" }}
            >
              Expertise
              {menuOpen ? (
                <FaChevronUp size={10} color="black" />
              ) : (
                <FaChevronDown size={10} color="black" />
              )}
            </button>

            <div
              className={`border-0 max-h-[250px] overflow-y-auto transition-all duration-150 absolute top-5 }`}
            >
              <ul
                className={`bg-gray-100 w-full ${
                  menuOpen ? "h-auto" : "h-0"
                } transition-all duration-350`}
              >
                {expertisesList.map((item) => (
                  <li key={item.url}>
                    <Link
                      to={item.url}
                      className={`block px-4 py-2 border-0 text-black`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </span>

          <Link to={pagesLinks.insights}>Insights</Link>
          <Link to={pagesLinks.contact}>Contact</Link>
        </div>
        <section className="text-sm space-y-2">
          {/* Address */}
          <div className="text-sm space-y-2 flex flex-col gap-0.5 text-gray-900 text-left">
            <a
              href={`${pagesLinks.location}`}
              target="_blank"
              className="flex justify-start align-middle gap-2 transition-all hover:scale-105"
            >
              <FaLocationDot size={20} color="#333" />
              <span>
                <address>
                  1st Floor, Modern Profound Tech Park, <br />
                Whitefields, Kondapur,
                <br />
                Telangana 500081
                </address>
              </span>
            </a>
            <a
              href={`mailto:${pagesLinks.mailid}`}
              className="flex justify-start align-middle gap-2 transition-all hover:scale-105"
            >
              <IoMailOutline size={20} color="#000" /> {pagesLinks.mailid}
            </a>
          </div>
        </section>

        {/* Social Links */}
        <div className="text-sm space-y-5 flex flex-col gap-0.5">
          <a
            href={pagesLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start align-middle gap-2 transition-all hover:scale-105"
          >
            <FaLinkedinIn size={20} color="#333" />
            LinkedIn
          </a>
          <a
            href={pagesLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start align-middle gap-2 transition-all hover:scale-105"
          >
            <FaInstagram size={20} className="aspect-square" color="#333" />
            Instagram
          </a>
          <a
            href={pagesLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex justify-start align-middle gap-2 transition-all hover:scale-105"
          >
            <FaFacebook size={20} className="aspect-square" color="#333" />
            Facebook
          </a>
        </div>

        <div className="text-sm space-y-2 flex flex-col gap-0.2">
          <Link to={pagesLinks.privacypolicy}>Privacy Policy</Link>
          <Link to={pagesLinks["terms-and-conditions"]}>Terms & Conditions</Link>
          <Link to={pagesLinks.disclaimer}>Disclaimer</Link>
          {/* Footer Bottom */}
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        &copy; 2025 Anvi.co
      </div>
    </footer>
  );
}
