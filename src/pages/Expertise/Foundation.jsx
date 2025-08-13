import React from 'react'
import ContactUs from '../../components/ContactUs'
import pagesLinks from '../../data/pagesLinks'
import { Link } from 'react-router-dom'
import TextAnimToTop from '../../components/TextAnimToTop'

export default function Foundations() {
  return (
   <>
      <section
        className="h-[90vh] md:min-h-[80vh] max-h-screen object-cover w-screen bg-cover bg-left max-md:bg-center bg-no-repeat flex flex-col justify-center p-10 md:p-15"
        style={{
          backgroundImage: "url(https://static.wixstatic.com/media/8425ecadf47444dfb40f79663d4cb9c5.jpg/v1/fill/w_1891,h_823,fp_0.42_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8425ecadf47444dfb40f79663d4cb9c5.jpg)"
            // "url(https://static.wixstatic.com/media/7ab3a8_02a65fd46924489b91df1aa8ab41e9d7~mv2.png/v1/fill/w_1891,h_823,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_02a65fd46924489b91df1aa8ab41e9d7~mv2.png)",
        }}
      >
        <div className="text-white flex flex-col gap-2 justify-start align-middle text-shadow-x">
          <TextAnimToTop>
          <h1 className="text-5xl text-shadow-gray-900">Anvi Foundation</h1>
          </TextAnimToTop>
          <TextAnimToTop delay={0.3}>
          <p className="text-xl text-shadow-gray-900">
            Creating impact from the ground up.
          </p>
          </TextAnimToTop>
          <TextAnimToTop delay={0.6} classname="mt-5">
          <Link
            to={pagesLinks.expertiseLinks.Foundation}
            className="hero-link max-w-max mt-5 bg-[#22a0af] px-10 py-3 hover:rounded-sm hover:px-15 transition-all duration-110 hover:bg-green-800"
          >
            Visit Site
          </Link>
          </TextAnimToTop>
        </div>
      </section>

     <ContactUs/>
      
   </>
  )
}
