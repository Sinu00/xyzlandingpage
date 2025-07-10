import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Truck, Building, Users } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Material Trading",
      description: "Comprehensive supply of industrial materials including valves, pipes, fittings, and more for all your project needs.",
      href: "/material-trading",
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Wide range of construction and industrial equipment available for short-term and long-term rental.",
      href: "/equipment-rental",
    },
    {
      icon: Building,
      title: "Construction",
      description: "Expert construction services for industrial, commercial, and infrastructure projects, delivered with quality and efficiency.",
      href: "/construction",
    },
    {
      icon: Users,
      title: "Manpower",
      description: "Skilled and experienced workforce solutions to meet your project requirements on time and on budget.",
      href: "/manpower",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-red-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to meet your industrial and construction needs with excellence and precision
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white hover:bg-gray-50/50 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 pt-8 relative z-10">
                {/* Enhanced icon with better hover effect */}
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-10 w-10 text-red-500 group-hover:text-white transition-all duration-500" />
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-8 relative z-10">
                <p className="text-gray-600 group-hover:text-gray-700 mb-8 leading-relaxed text-center transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Enhanced button with better hover effect */}
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-red-500/20 text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 py-3 font-semibold group-hover:shadow-lg transform group-hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
