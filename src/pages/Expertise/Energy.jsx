import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Energy() {
  return (
    <>
    <section className="relative w-full bg-cover bg-center">
        <div>
            <img src="https://static.wixstatic.com/media/7ab3a8_939941ad686b4caa8f38a9c4823af190~mv2.png/v1/fill/w_1891,h_823,fp_0.36_0.60,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_939941ad686b4caa8f38a9c4823af190~mv2.png" alt="" />
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-start  sm:px-10 text-3xl'>
            <h1 className='text-white text-5xl font-bold mr-2'>Energy</h1>
            <p className='text-white text-base ml-10 '>
Hydrogen at the Core</p> 
        </div>
    </section>
    <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
    
 
    <div>
      <h2 className="text-3xl font-light leading-snug text-gray-900 mb-4">
        At ANVI, hydrogen fuel cells are the foundation of our energy vision.
      </h2>
      <p className="text-lg text-gray-700 mb-25 ">
        We're building efficient, zero-emission systems designed to scale—from mobility to infrastructure.
      </p>
    </div>

 
    <div>
      <img src="https://static.wixstatic.com/media/261091_a688caf424164f938cfc73f18fdc453d~mv2.jpg/v1/crop/x_0,y_67,w_1024,h_852/fill/w_336,h_280,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-08%20at%2011_33_14_6fbec7b0.jpg" className=' w-full h-auto' alt="" />
    </div>

  </div>
</section>
<section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center  ml-25 text-2xl p-10 mb-25">

        <div>
            <img src="https://static.wixstatic.com/media/261091_2566035619754f8cb3e0fafa0394e361~mv2.jpg/v1/fill/w_165,h_153,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1823979425_b.jpg" alt="" />  
            <h1 className='font-semibold py-3.5'>Hydrogen First</h1>
<p>Zero-emission energy thats powerful, portable, and ready for the future. </p></div>
<div>
    <img src="https://static.wixstatic.com/media/261091_6ad9273e68f5408a8faa7f4f6668d855~mv2.jpg/v1/fill/w_175,h_141,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1823979425_b.jpg" alt="" />
    <h1 className='font-semibold py-3.5'>Real-world Ready</h1>
    <p>Flexible systems designed for today's toughest energy challenges.</p>
</div>
<div>
    <img src="https://static.wixstatic.com/media/261091_a8d8662ac38b4ea6a73fb748d1603872~mv2.jpg/v1/crop/x_0,y_149,w_1024,h_727/fill/w_154,h_125,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1823979425_b.jpg" alt="" />
    <h1 className='font-semibold py-3.5 '>Built to Scale</h1>
    <p>From pilot to production we engineer for longevity and impact.</p>
</div>
      
        </div>


</section>
<ContactUs/>
   
    </>
  )
}
