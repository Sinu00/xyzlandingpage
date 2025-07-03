"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-96px)] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/heroamber.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-12 pl-4">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            BUILDING THE FUTURE
            <br />
            <span className="text-amber-500">WITH EXCELLENCE</span> IN
            <br />
            EVERY PROJECT
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Your trusted partner for comprehensive construction solutions. From premium equipment rental and material trading to skilled manpower and complete construction services - we deliver excellence at every stage of your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
