"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      {/* Top bar */}
      <div className="bg-red-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +1 234 567 8900
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              info@xyz.com
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-red-500 text-white px-3 py-2 rounded font-bold text-xl">XYZ</div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Button variant="outline" className="bg-white text-red-500 border-red-500 hover:bg-red-50">
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-red-500 hover:bg-red-600 mt-4">Get Quote</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
