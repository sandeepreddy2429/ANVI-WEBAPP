import React from 'react'
import ContactUs from '../components/ContactUs'

export default function PrivacyPolicy() {
  return (
    <>
    <section className='footer-pages relative w-full bg-cover bg-center p-5  sm:flex-col max-w-7xl m-auto min-h-screen'>
      <div className='max-w-5xl'>
        <h1 className='text-5xl font-semibold text-start my-15'>
          Privacy Policy
        </h1>
        <h2 className='text-3xl  text-start my-5'>
      Privacy Policy - the basics
        </h2>
        <p className='mb-3 font_8 wixui-rich-text__text'>A Privacy Policy is a statement that outlines how a website collects, uses, shares, processes, and manages information from its visitors and customers. It typically also explains the website’s commitment to safeguarding this information and describes the measures in place to protect privacy.</p>
        <p className='mb-3 font_8 wixui-rich-text__text'>Privacy requirements can vary depending on the laws of different regions. It is your responsibility to ensure that your Privacy Policy meets the legal obligations that apply to your business activities and location.</p>
      </div >
      <div className='mb-10 max-w-5xl'>
        <h2 className='text-3xl  text-start my-5'>What to include in the Privacy Policy</h2>
        <p>In general, a Privacy Policy covers topics such as: the types of information a website collects and how it collects that data; the reasons for collecting this information; the website’s policies on sharing data with third parties; how visitors and customers can exercise their rights under applicable privacy laws; specific rules for collecting information from minors; and other relevant privacy practices</p>
      </div>
    </section>
    <ContactUs/>
    </>
  )
}
