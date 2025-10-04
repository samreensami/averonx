"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import type React from "react"

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh]">
      {/* Hero Image */}
      <img
        src="/images/avernox.jpg"
        alt="AveronX"
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4 md:px-8">
        {/* Animated Heading */}
        <motion.h1
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#1079D9]"
        >
          Welcome to Averon
          <span className="text-[#1079D9] text-6xl md:text-8xl">X</span>
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-white"
        >
          Empowering Next Gen Leaders
        </motion.p>

        {/* Button with Services card hover effect */}
        <div className="mt-6">
          <Button
            size="lg"
            className="h-full border border-gray-700 bg-black/40 text-white transition-all duration-300
                       hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40 hover:bg-black/40"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile social row with same hover as cards */}
        <div className="mt-6 flex gap-3 md:hidden">
          <SocialLink
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin className="h-5 w-5 text-[#0056FF]" />}
          />
          <SocialLink
            href="https://twitter.com"
            label="Twitter"
            icon={<Twitter className="h-5 w-5 text-[#0056FF]" />}
          />
          <SocialLink
            href="https://facebook.com"
            label="Facebook"
            icon={<Facebook className="h-5 w-5 text-[#0056FF]" />}
          />
          <SocialLink
            href="https://instagram.com"
            label="Instagram"
            icon={<Instagram className="h-5 w-5 text-[#0056FF]" />}
          />
        </div>
      </div>

      {/* Desktop social icons with same hover as cards */}
      <nav className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex-col gap-3">
        <SocialLink
          href="https://linkedin.com"
          label="LinkedIn"
          icon={<Linkedin className="h-5 w-5 text-[#0056FF]" />}
        />
        <SocialLink
          href="https://twitter.com"
          label="Twitter"
          icon={<Twitter className="h-5 w-5 text-[#0056FF]" />}
        />
        <SocialLink
          href="https://facebook.com"
          label="Facebook"
          icon={<Facebook className="h-5 w-5 text-[#0056FF]" />}
        />
        <SocialLink
          href="https://instagram.com"
          label="Instagram"
          icon={<Instagram className="h-5 w-5 text-[#0056FF]" />}
        />
      </nav>
    </section>
  )
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-md bg-black/40 text-white border border-gray-700 transition-all duration-300
                 hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  )
}

export default Hero
