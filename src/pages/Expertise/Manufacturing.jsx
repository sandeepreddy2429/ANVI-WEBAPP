import React from 'react'
import ContactUs from '../../components/ContactUs'

export default function Manufacturing() {
  return (
   <>
   
<section  className='relative'>
    <div className='w-full h-full '>     <img  className='object-cover' src="https://static.wixstatic.com/media/7ab3a8_30d9517b63df409f8041e37b1652f1f5~mv2.png/v1/fill/w_1891,h_823,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7ab3a8_30d9517b63df409f8041e37b1652f1f5~mv2.png" alt="" />
</div>

     <div className='absolute inset-0 flex flex-col justify-center items-start  sm:px-10 text-3xl'>
            <h1 className='text-white text-5xl font-bold mr-2'>Manufacturing</h1>
            <p className='text-white text-base ml-10  p-5'>
Building what's next, today</p>
        </div>
       
</section>
 <ContactUs/>
    </>
  )
}
