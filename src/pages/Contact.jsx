import React from 'react'
import ContactUs from '../components/ContactUs'

export default function Contact() {
  return (
    <section id="contact-section" className="w-full bg-[#f4f4f4] py-16 md:px-16 mx-auto">
      <div className="max-w-7xl mb-10 px-5">
        <h1 className="text-5xl sm:text-5xl md:text-7xl sm:px-4 md:px-16 md:pt-8 sm:py-2 md:py-4 text-black mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-800 sm:px-4 md:px-16 ">We would love to hear from you</p>
      </div>
      <ContactUs />
    </section>
  )
}
