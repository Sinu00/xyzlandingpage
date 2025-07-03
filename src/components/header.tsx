"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+966 00 000 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@xyzequipment.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Leading Equipment Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-red-600 text-white px-3 py-2 rounded font-bold text-xl">XYZ</div>
              <span className="text-gray-900 font-semibold text-lg">Equipment Solutions</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="bg-white text-red-600 border-red-600 hover:bg-red-50">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-red-600 hover:bg-red-700 mt-4">Get Quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
