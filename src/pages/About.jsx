import React from 'react'

import Footer from '../components/Footer'


export default function About() {
  return (
    <main>
      <section>
        <div>
          <img src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap" alt="" />

        </div>

      </section>
      <section className='bg-[#f4f4f4] p-5'>
        <div className="border-t-2 border-gray-300 mt-10 p-3 pt-8 w-[90%] mx-auto flex flex-row items-center justify-start">

          <div className='self-start max-w-[50%] w-[50%]'>
            <b className='text-8xl ' > Our Story</b>
          </div>
          <div className='text-gray-900 max-w-[50%]  space-y-5  m-10 w-[50%] p-10 text-2xl-sm '>

            <b className='font-light'>➤ABOUT ANVI</b>

            <p >

              For too long, the future has been imagined in fragments — one breakthrough in
              isolation, one innovation at a time. But in a world as interconnected as ours, true
              transformation comes from convergence. That’s where Anvi begins.</p>

            <p>We are building a future where technology and humanity evolve together — where machines feel natural, stories inspire healing, power flows cleanly, and design uplifts everyday life.</p>
            <p>From labs and clean rooms to design studios and orbit, we are engineering for a tomorrow where innovation doesn’t just serve — it elevates.

              This is the beginning of a new civilization.</p>
            <img src="https://static.wixstatic.com/media/561197a90e6d4a6bb1cf92609952eb46.jpg/v1/fill/w_611,h_408,fp_0.43_0.39,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/In%20a%20Meeting.jpg" alt="" />
          </div>


        </div>


        <div>

        </div>
      </section>

      <section className='bg-[#f4f4f4] p-5'>
        <div className="border-t-2 border-gray-300 mt-10 p-3 pt-8 w-[90%] mx-auto flex flex-row items-center justify-start">

          <div className='self-start max-w-[50%] w-[50%]'>
            <b className='text-6xl ' > We build for people</b>
          </div>
          <div className='text-gray-900 max-w-[50%]  m-10 w-[50%] p-10 text-2xl-sm flex flex-col gap-0'>

            <b className='mb-4  font-light text-gray-950 f' >➤ WHO WE ARE</b>

            <p className='mb-4'>
              Founded by a team of visionary leaders, scientists, creators, and engineers
              — including doctors, technologists, and entrepreneurs — Anvi stands as a multi-domain innovation
              powerhouse. Our mission is to design transformational products and platforms that solve real-world problems
              while setting new global benchmarks in quality, ethics, and imagination</p>
            <b className='mb-4   font-light'>➤OUR VISION</b>
            <p className='font-semibold'>“To engineer the next civilization—intelligently, ethically, beautifully.” </p>
            <p>We are not here to fit into the future.</p>
            <p>We are here to build it.
            </p>



          </div>


        </div>

        <div>

        </div>
      </section>
      <section className="bg-black text-white px-6 md:px-20 py-20 rounded-t-[60px]">
        {/* Main Title */}
        <h2 className="text-4xl md:text-4xl font-extrabold text-start mb-20 leading-tight">
          Why are we different?
        </h2>

        {/* 2-column grid for features */}
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Block 1 */}
          <div className="border-t  border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">Interdisciplinary Innovation</h3>
            <p className="text-white/70">
              Each vertical fuels the other. Our space scientists collaborate with game designers. Our fashion line takes inspiration from robotics and motion.
            </p>
          </div>

          {/* Block 2 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">Made in India, Made for the World</h3>
            <p className="text-white/70">
              All of Anvi’s products are born in India, developed across our centers in India and the U.S., and built to compete on a global stage.
            </p>
          </div>

          {/* Block 3 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">Woman-led at the Core</h3>
            <p className="text-white/70">
              Co-founded by Dr. Neelima, a trailblazing doctor and entrepreneur, Anvi celebrates leadership that is inclusive, balanced, and bold.
            </p>
          </div>

          {/* Block 4 */}
          <div className="border-t border-white/30 pt-6">
            <h3 className="text-xl font-semibold mb-2">Human-First Philosophy</h3>
            <p className="text-white/70">
              Whether we’re building humanoids or storytelling engines, everything we create is centered around enhancing the human experience—emotionally, intelligently, and ethically.
            </p>
          </div>
        </div>
      </section>

      <Footer />




    </main>
  )
}
