import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Semiconductors() {
  return (
    <>
      <section className='relative w-full bg-cover bg-center'>
        <div className='w-full h-full'>
          <img className='object-cover' src="https://static.wixstatic.com/media/7ab3a8_5061f2ff84e74c19ab40ccc098b79c2f~mv2.png/v1/fill/w_1891,h_823,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_5061f2ff84e74c19ab40ccc098b79c2f~mv2.png" alt="" />
        </div>
         <div className="absolute inset-0 flex flex-col justify-center items-start  px-4 sm:px-12">
          <h1 className="text-white sm:text-5xl font-bold mb-2">
            Semi-conductors
          </h1>
          <p className="text-white text-base  mb-4">


            The heart of innovation, beating fast
          </p>
        </div>
      </section>
 

      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-12">
            At Anvi we're advancing semiconductor technology, developing high
            performance materials and chips that drive the next generation of electronics.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100 p-20 border-b-4 border-transparent rounded-lg shadow-sm hover:shadow-xl hover:bg-white hover:border-teal-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">High performance chips</h3>
              <p className="text-gray-700 mb-6">
                Innovative, energy-efficient chips that power the future of electronics.
              </p>
              <button className="bg-black text-white px-6 py-2 font-medium hover:bg-teal-500 hover:text-white transition-colors duration-200">
                Start Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-20 border-b-4 border-transparent rounded-lg shadow-sm hover:shadow-xl hover:bg-white hover:border-teal-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Advanced Materials</h3>
              <p className="text-gray-700 mb-6">
                Precision engineered materials for superior performance and reliability.
              </p>
              <button className="bg-black text-white px-6 py-2 font-medium hover:bg-teal-500 hover:text-white transition-colors duration-200">
                Start Now
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-20 border-b-4 border-transparent rounded-lg shadow-sm hover:shadow-xl hover:bg-white hover:border-teal-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">AI & Data Processing</h3>
              <p className="text-gray-700 mb-6">
                Transforming data processing capabilities for smarter systems and applications.
              </p>
              <button className="bg-black text-white px-6 py-2 font-medium hover:bg-teal-500 hover:text-white transition-colors duration-200">
                Start Now
              </button>
            </div>
          </div>
        </div>

      </section>

      <ContactUs />
    </>
  )
}
