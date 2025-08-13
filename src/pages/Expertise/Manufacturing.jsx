import React from "react";
import ContactUs from "../../components/ContactUs";
import { Link } from "react-router-dom";
import pagesLinks from "../../data/pagesLinks";

export default function Manufacturing() {
  return (
    <>
      <section
        className="h-[90vh] md:min-h-[80vh] max-h-screen object-contain w-screen bg-cover bg-left max-md:bg-center bg-no-repeat flex flex-col justify-center p-10 md:p-15"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/7ab3a8_30d9517b63df409f8041e37b1652f1f5~mv2.png/v1/fill/w_1891,h_823,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_30d9517b63df409f8041e37b1652f1f5~mv2.png)`,
        }}
      >
        <div className="text-white flex flex-col gap-2 justify-start align-middle text-shadow-xl">
          <h1 className="text-5xl text-shadow-gray-900">Manufacturing</h1>
          <p className="text-xl text-shadow-gray-900">
            Building what's next, today
          </p>
          <Link
            to={pagesLinks.expertiseLinks.Manufacturing}
            className="hero-link max-w-max mt-5 bg-[#22a0af] px-10 py-3 hover:rounded-sm hover:px-15 transition-all duration-110 hover:bg-green-800"
          >
            Visit Site
          </Link>
        </div>
      </section>

      <ContactUs />
    </>
  );
}
