import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const services = [
    "Equipment Rental",
    "Equipment Trading",
    "Maintenance Services",
    "Technical Consulting",
    "Project Solutions",
    "24/7 Emergency Support",
  ]

  const quickLinks = ["About Us", "Our Services", "Portfolio", "Contact Us", "Get Quote", "Careers"]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-600 text-white px-3 py-2 rounded font-bold text-xl">XYZ</div>
              <span className="font-semibold text-lg">Equipment Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of equipment rental, trading, and maintenance services. Transforming industries with
              cutting-edge solutions for optimal performance and growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Industrial District</p>
                  <p>Riyadh, Saudi Arabia</p>
                  <p>P.O. Box 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+966 50 948 1444</p>
                  <p>+966 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@xyzequipment.com</p>
                  <p>sales@xyzequipment.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 XYZ Equipment Solutions. All rights reserved.</p>
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
