import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Lifesciences() {
  return (
    <>
      <section className='relative w-full bg-cover bg-center'>
        <div>
          <img src="https://static.wixstatic.com/media/7ab3a8_b0d1bcf290184c9f987cc78f5b550701~mv2.png/v1/fill/w_1891,h_823,fp_0.50_0.61,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_b0d1bcf290184c9f987cc78f5b550701~mv2.png" alt="" />
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-start  sm:px-10 text-3xl text-white' >
          <h1 className='text-5xl  mr-2 mb-3'>Life Science</h1>
          <p className='text-base ml-10'>Pioneering breakthroughs for better lives.</p>
        </div>
 
    
      </section>
      <ContactUs/>
    </>
  )
}
