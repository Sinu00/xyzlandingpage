import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo/AscendArabiapoppinscroped.png" alt="Ascend Arabia" width={100} height={32} className="h-20 w-auto object-contain rounded-lg" />
            </Link>
            <p className="text-gray-300 text-sm">Leading provider of industrial equipment and construction solutions.</p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-500 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-500 transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-500 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-500 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment-rental" className="text-gray-300 hover:text-red-400 transition-colors">
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link href="/material-trading" className="text-gray-300 hover:text-red-400 transition-colors">
                  Material Trading
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-gray-300 hover:text-red-400 transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/manpower" className="text-gray-300 hover:text-red-400 transition-colors">
                  Manpower
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Prince Thamer St,</p>
                  <p className="text-gray-300 text-sm">Al Khobar Al Shamalia,</p>
                  <p className="text-gray-300 text-sm">Al Khobar 34426</p>
                </div>
              </div>
              <a href="tel:+966573653238" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+966 57 365 3238</p>
              </a>
              <a href="mailto:info@ascendarabia.com" className="flex items-center space-x-3 hover:text-red-400 transition-colors">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@ascendarabia.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ascend Arabia Company Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
