import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Entertainment() {
  return (
    <>
      <section className="relative w-full bg-cover bg-center">
        <div>
          <img src="https://static.wixstatic.com/media/7ab3a8_02a65fd46924489b91df1aa8ab41e9d7~mv2.png/v1/fill/w_1891,h_823,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_02a65fd46924489b91df1aa8ab41e9d7~mv2.png" alt="" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-start  sm:px-12">
          <h1 className="text-white sm:text-5xl mb-2">
            Entertainment
          </h1>
          <p className="text-white text-base  mb-4">

            Immersive stories, limitless creativity.
          </p>
        </div>
      </section>

      <ContactUs />
    </>
  )
}
