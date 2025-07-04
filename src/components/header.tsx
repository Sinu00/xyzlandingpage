"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar - compact and professional */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                +966 548613433
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                info@ssqindus.com
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - compact and clean */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - smaller and more professional */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-red-500 text-white px-3 py-2 rounded-md font-bold text-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                  XYZ
                </div>
              </Link>
            </div>

            {/* Desktop navigation - compact spacing */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#clients"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Compact CTA button */}
              <Button 
                variant="outline" 
                className="bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white px-4 py-1.5 text-sm font-medium rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-500 hover:bg-gray-50 transition-colors duration-300"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu - compact styling */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg">
              <Link
                href="/"
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#clients"
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-red-500 hover:bg-gray-50 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3">
                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md shadow-sm transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
