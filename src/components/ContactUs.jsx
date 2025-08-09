import React, { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const emailerror = () => (
    <span className="flex items-center justify-start gap-1">
      <MdOutlineErrorOutline size={18} /> Enter an email address like
      example@mysite.com
    </span>
  );

  const msgerror = () => (
    <span className="flex items-center justify-start gap-1">
      <MdOutlineErrorOutline size={15} /> Enter an answer.
    </span>
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.email) {
      formErrors.email = emailerror();
    }

    if (!formData.message) {
      formErrors.message = msgerror();
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTimeout(() => {
        setErrors({});
      }, 5000);
    } else {
      console.log("Form submitted:", formData);
      setErrors({});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="w-full bg-gray-100 md:p-16 max-p-8 mx-auto py-10 px-10 sticky">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 shrink-1 grow-0">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6">
            Get In Touch
          </h1>
          <p className="text-md md:text-lg text-gray-800">
            Please fill in your details below our team will get back to you
            soon.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 md:p-8 md:pr-12 max-p-4 max-w-full bg-transparent md:bg-white p-1 shadow-none md:shadow-md text-black shrink-0 grow-1">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row 1 - First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="mt-1 block w-full border border-gray-300 p-2 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Row 2 - Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`mt-1 block w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } p-2 placeholder-gray-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm min-[30px]">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <PhoneInput
                  country={"in"}
                  enableSearch={true}
                  placeholder="Phone"
                  buttonClass="!bg-red !border-none"
                  dropdownClass="!text-sm"
                  containerClass="!w-full"
                  inputStyle={{ width: "100%", backgroundColor: "transparent" }}
                  className="mt-1 block w-full border bg-transparent border-gray-300 hover:outline-[1.5px] rounded-sm placeholder-gray-400"
                />
              </div>
            </div>

            {/* Row 3 - Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`mt-1 block w-full border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } p-2 placeholder-gray-400`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-1/2 px-6 py-2 bg-black text-white hover:bg-[#22a0afb3] "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
