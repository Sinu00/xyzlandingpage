"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-92px)] flex items-center">
      {/* Background image with improved overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%), url('/hero/hero.jpeg')`,
        }}
      />

      {/* Content with professional typography and spacing */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          {/* Professional heading with proper typography hierarchy */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            <span className="block animate-fade-in-up">BUILDING THE FUTURE</span>
            <span className="block animate-fade-in-up animation-delay-200">
              <span className="text-red-500">WITH EXCELLENCE</span> IN
            </span>
            <span className="block animate-fade-in-up animation-delay-400">EVERY PROJECT</span>
          </h1>

          {/* Professional paragraph with proper line height and spacing */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
            Your trusted partner for comprehensive construction solutions. From premium equipment rental and material trading to skilled manpower and complete construction services.
          </p>

          {/* Professional buttons with appropriate sizing */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
            <a href="#services" className="inline-block">
              <Button 
                size="default" 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-base font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>

            <Link href="/contact" className="inline-block">
              <Button
                size="default"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base font-medium rounded-md backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 group"
              >
                <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator with smooth animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center cursor-pointer hover:border-red-500 transition-colors duration-300">
          <div className="w-1 h-2 bg-white rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>

      {/* Custom CSS for fade-in animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
