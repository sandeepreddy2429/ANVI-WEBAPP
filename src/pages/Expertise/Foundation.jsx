import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Foundations() {
  return (
   <>
  <section className='relative w-full bg-cover bg-center'>
        <div>
 <img src="https://static.wixstatic.com/media/8425ecadf47444dfb40f79663d4cb9c5.jpg/v1/fill/w_1891,h_823,fp_0.42_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8425ecadf47444dfb40f79663d4cb9c5.jpg" alt="" />        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-start  sm:px-10 text-3xl text-white' >
          <h1 className='text-5xl  mr-2 mb-3'>Anvi Foundation</h1>
          <p className='text-base ml-10'>Creating impact from the ground up.</p>
        </div>

      </section>
     <ContactUs/>
      
   </>
  )
}
