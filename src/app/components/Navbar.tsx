"use client";
import React from 'react';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#062243] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link href="/">AveronX</Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="#about" className="hover:text-blue-400">About</Link>
            <Link href="#services" className="hover:text-blue-400">Services</Link>
            <Link href="#contact" className="hover:text-blue-400">Contact</Link>
            <Link href="#speakers" className="hover:text-blue-400">Speakers</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001F3F] px-2 pt-2 pb-3 space-y-2">
          <Link href="#about" className="block px-3 py-2 rounded-md hover:bg-blue-600">About</Link>
          <Link href="#services" className="block px-3 py-2 rounded-md hover:bg-blue-600">Services</Link>
          <Link href="#contact" className="block px-3 py-2 rounded-md hover:bg-blue-600">Contact</Link>
          <Link href="#speakers" className="block px-3 py-2 rounded-md hover:bg-blue-600">Speakers</Link>
        </div>
      )}
    </nav>
  );
}
