import React from 'react';
import { useState } from 'react';
import ContactUs from '../../components/ContactUs';
import { sections } from '../../components/textilesContent';

const image1="https://static.wixstatic.com/media/7ab3a8_56062bf596204067b44aef8c221474b2~mv2.png/v1/fill/w_2219,h_965,fp_0.50_0.50,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_56062bf596204067b44aef8c221474b2~mv2.png"


export default function Textiles() {
  const [activeIndex, setActiveIndex] = useState(0);
 
  return (
    <>
    <section className='w-full h-[85vh]  bg-cover bg-center'style={{ backgroundImage: `url(${image1})` }}>
      <div className="md:pt-60 pt-60">
      <h1 className='text-4xl md:text-5xl text-white md:px-20 md:pb-5 font-bold px-10'>Textiles</h1>
      <p className='text-white md:px-40 md:text-lg text-lg px-20'>Comfort and technology in perfect harmony.</p>
      </div>
    </section>

    <section className='w-full bg-white  mx-auto'>
      <div className=' mx-auto px-10 py-10 md:max-w-[1000px]'>
        <h1 className='text-3xl md:text-3xl font-bold mb-5 '>About Textiles</h1>
        <p className='text-lg md:text-xl'>Anvi is India’s first AI-powered tailoring platform for men, combining technology with traditional craftsmanship to offer custom-made formal and ethnic wear. We aim to provide a seamless, personalized shopping experience that blends style, precision, and convenience.</p>
      </div>

    </section>
    
    <section className="w-full bg-white py-10">
        <div className="max-w-screen mx-auto px-8 ">
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
            <div className=" leading-relaxed max-md:px-2 px-10">
              {sections[activeIndex].content}
            </div>
          </div>
        </div>
      </section>


    <ContactUs />

    </>
    
  )
}
