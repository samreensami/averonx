"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-[#072851] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">AveronX</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Empowering the next generation of leaders through innovation, 
            collaboration and community-driven growth.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
          </ul>
        </div>

        {/* Right Section - Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-400">Email: info@averonx.com</p>
          <p className="text-sm text-gray-400">Phone: +92 300 1234567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} AveronX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
