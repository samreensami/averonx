"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <img
        src="/images/taskimage.png"
        alt="AveronX hero banner"
        className="block w-full h-[60vh] md:h-[60vh] object-cover"
        draggable={false}
      />

      {/* Bottom content wrapper */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
        {/* Left bottom: Button */}
        <a href="#contact" className="inline-flex">
          <Button
            size="lg"
            className="px-6 border border-gray-300 bg-black/40 text-white font-semibold rounded-lg 
                       transition-all duration-300 hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40"
          >
            Get Started
          </Button>
        </a>

        {/* Right bottom: Social Icons in a line */}
        <div className="flex gap-4">
          <SocialLink
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin className="h-5 w-5" aria-hidden="true" />}
          />
          <SocialLink
            href="https://twitter.com"
            label="Twitter"
            icon={<Twitter className="h-5 w-5" aria-hidden="true" />}
          />
          <SocialLink
            href="https://facebook.com"
            label="Facebook"
            icon={<Facebook className="h-5 w-5" aria-hidden="true" />}
          />
          <SocialLink
            href="https://instagram.com"
            label="Instagram"
            icon={<Instagram className="h-5 w-5" aria-hidden="true" />}
          />
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-7 w-8 items-center justify-center rounded-full bg-black/40 text-white border border-gray-300
                 transition-all duration-300 hover:border-[#0056FF] hover:bg-[#0056FF] hover:text-white hover:shadow-lg hover:shadow-blue-900/40"
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  )
}

export default Hero
