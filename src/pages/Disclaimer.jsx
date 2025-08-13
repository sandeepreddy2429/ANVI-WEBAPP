import React from 'react';
import ContactUs from '../components/ContactUs';
export default function Disclaimer() {
  return (
    <>
    <section className="min-h-screen bg-white flex items-start justify-center md:grow max-md:px-0 px-10 ">
      <div className="max-w-[1600px] h-auto w-full p-8 ">
        <h1 className="text-4xl md:text-6xl font-bold md:mb-10 mb-5 text-gray-900">Disclaimer</h1>
        
        <p className="mb-4 text-gray-700">
          The information provided on ANVI.co is for general informational purposes only.
          All content on this site is provided “as is” without any representations or warranties,
          express or implied.
        </p>

        <p className="mb-4 text-gray-700">
          ANVI.co makes no warranties or guarantees regarding the accuracy, completeness,
          or suitability of the information provided. Any reliance you place on such information
          is strictly at your own risk.
        </p>

        <p className="mb-4 text-gray-700">
          In no event shall ANVI.co be liable for any loss or damage, including without limitation
          indirect or consequential loss or damage, arising out of or in connection with the use
          of this website.
        </p>

        <p className="mb-4 text-gray-700">
          Through this website, you may be able to link to other websites that are not under
          the control of ANVI.co. We have no control over the nature, content, and availability
          of those sites.
        </p>

        <p className="mb-4 text-gray-700">
          This is a temporary disclaimer and may be updated at any time without prior notice.
          Please{" "}
          <a
            href="mailto:info@anvi.co"
            className="text-blue-600 hover:underline"
          >
            contact us
          </a>{" "}
          for any questions.
        </p>

        
      </div>
    </section>

    <ContactUs />
    </>
  );
}
