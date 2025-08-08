import React from 'react'
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (

      <section className="w-full h-screen  flex items-center justify-center bg-[#f4f4f4] py-16 px-16 text-center">
        <div className="max-w-7xl mb-10">
          <h1 className="text-lg sm:text-3xl md:text-5xl sm:px-4 md:px-16 md:pt-8 sm:py-2 md:py-4 text-black mb-6">
           ERROR: Page Not Found
          </h1>
          <h3 className="text-5xl sm:text-6xl md:text-9xl font-bold text-black-800 mb-4">
            404 
          </h3>
          <p className="text-md sm:text-xl md-text-xl text-gray-800 sm:px-4 md:px-16">This page isn't available. Please click the button to return to the homepage.</p>
          <Link to="/" className='inline-block mt-10 p-2 border border-black text-white bg-black rounded-md hover:bg-[#22a0afb3] hover:text-white transition-colors duration-200'>Go to HomePage</Link>
        </div>
      </section>
  )
}
