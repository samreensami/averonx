"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target, TrendingUp } from "lucide-react"

const items = [
  {
    icon: <Target className="h-6 w-6 text-[#0056FF]" aria-hidden="true" />,
    title: "Goal Alignment",
    desc: "Set clear objectives and align teams to deliver measurable outcomes.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#0056FF]" aria-hidden="true" />,
    title: "Growth Programs",
    desc: "Accelerate skills with curated tracks, mentorship, and real projects.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#0056FF]" aria-hidden="true" />,
    title: "Quality & Trust",
    desc: "Operate with accountability and deliver dependable results, every time.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#072851] via-[#06254a] to-[#072851] text-white"
    >
      {/* blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1079D9] drop-shadow-lg">
          What We Offer
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className="h-full border border-gray-700 bg-black/40 text-white 
                         transition-all duration-300 hover:border-[#0056FF] hover:shadow-lg hover:shadow-blue-900/40"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                {item.icon}
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 leading-relaxed">{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
