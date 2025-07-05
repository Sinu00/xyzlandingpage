"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top contact bar - compact and professional */}
      <div className="hidden sm:block bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center gap-2 text-xs">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span className="text-xs">+966 54 482 3155</span>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span className="text-xs">info@xyz.com</span>
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
      <nav className={`border-gray-100 transition-all duration-300 ${
        isScrolled ? 'bg-transparent' : 'bg-white border-b'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - smaller and more professional */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <div className={`bg-red-500 text-white px-3 py-2 rounded-md font-bold text-lg shadow-md hover:bg-red-600 transition-all duration-300 ${
                  isScrolled ? 'transform scale-95 shadow-lg' : ''
                }`}>
                  XYZ
                </div>
              </Link>
              {/* Vision 2030 Logo */}
              <div className="flex items-center">
                <img 
                  src="/vision2030logo.jpg" 
                  alt="Vision 2030" 
                  className={`h-8 w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-6' : ''
                  }`}
                />
              </div>
            </div>

            {/* Desktop navigation - compact spacing */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === '/' 
                    ? 'text-red-500 bg-red-50 rounded-md' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === '/about' 
                    ? 'text-red-500 bg-red-50 rounded-md' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                About
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link
                href="#services"
                className="px-3 py-2 text-sm font-medium transition-colors duration-300 relative group text-gray-700 hover:text-red-500"
              >
                Services
                <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === '/contact' 
                    ? 'text-red-500 bg-red-50 rounded-md' 
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              {/* Compact CTA button */}
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white px-4 py-1.5 text-sm font-medium rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </Link>
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
            <div className={`px-4 pt-2 pb-4 space-y-1 shadow-lg transition-all duration-300 ${
              isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
            }`}>
              <Link
                href="/"
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  pathname === '/' 
                    ? 'text-red-500 bg-red-50 font-semibold' 
                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  pathname === '/about' 
                    ? 'text-red-500 bg-red-50 font-semibold' 
                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 text-gray-700 hover:text-red-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  pathname === '/contact' 
                    ? 'text-red-500 bg-red-50 font-semibold' 
                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3">
                <Link href="/contact" className="block">
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md shadow-sm transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
