import React from 'react';
import ContactUs from '../components/ContactUs';  

export default function TermsAndConditions() {
  return (
    <>
    <section className="footer-pages min-h-screen  bg-white md:flex items-start justify-center md:py-6  ">
      <div className=" w-full max-w-[1600px] md:px-15 px-5 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mb-4 text-gray-700">
          Welcome to ANVI.co. By accessing or using this website, you agree to be bound by these
          Terms & Conditions. If you do not agree with any part of these terms, you should not use
          this website.
        </p>

        <h2 className="text-xl  mt-6 mb-2">Use of Content</h2>
        <p className="mb-4 text-gray-700">
          All content on ANVI.co is provided for general information and personal use only.
          Unauthorized reproduction, distribution, or commercial use of the content is prohibited
          unless prior written permission is obtained.
        </p>

        <h2 className="text-xl  mt-6 mb-2">User Responsibilities</h2>
        <p className="mb-4 text-gray-700">
          You agree to use this website in a lawful manner and not to engage in any activity
          that may harm the website, its content, or its users.
        </p>

        <h2 className="text-xl  mt-6 mb-2">Third-Party Links</h2>
        <p className="mb-4 text-gray-700">
          This website may contain links to external sites that are not operated by ANVI.co.
          We are not responsible for the content or practices of any linked sites.
        </p>

        <h2 className="text-xl mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          ANVI.co shall not be held liable for any damages, losses, or claims arising from your use
          of this website or reliance on its content.
        </p>

        <h2 className="text-xl  mt-6 mb-2">Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          These terms are subject to change at any time without prior notice. Continued use of the
          website after changes are posted constitutes your acceptance of the new terms.
        </p>

        <p className="mt-6 text-gray-700">
          For any questions about these Terms & Conditions, please{" "}
          <a
            href="mailto:info@anvi.co"
            className="text-blue-600 hover:underline"
          >
            contact us
          </a>.
        </p>

      
      </div>
    </section>
    <ContactUs />
    </>
  );
}
