"use client";
import React from 'react'

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#040B15] via-black/100 to-[#072851] text-white"
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 bg-black/30 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1079D9] drop-shadow-lg">
          About AveronX
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          We empower the next generation of leaders through hands on initiatives 
          collaborative learning and community driven projects. Our mission is to 
          create meaningful opportunities where ambition meets execution.
        </p>
      </div>
    </section>
  )
}

export default About
