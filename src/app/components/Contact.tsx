"use client";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#072953] via-black/100 to-black text-white flex justify-center"
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative max-w-2xl w-full px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#1079D9] drop-shadow-lg">
          Contact Us
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Have any questions or ideas? We would love to hear from you.  
          Fill out the form below and our team will get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="mt-10 grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-black/40 border border-gray-700 text-white 
                       transition-all duration-300 
                       hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40
                       focus:outline-none focus:ring-2 focus:ring-[#0056FF]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-black/40 border border-gray-700 text-white 
                       transition-all duration-300 
                       hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40
                       focus:outline-none focus:ring-2 focus:ring-[#0056FF]"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-black/40 border border-gray-700 text-white 
                       transition-all duration-300 
                       hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40
                       focus:outline-none focus:ring-2 focus:ring-[#0056FF]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 border border-gray-300 bg-black/40 text-white font-semibold rounded-lg 
                       transition-all duration-300 hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
