import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Truck, Building, Users } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: ShoppingCart,
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your industrial and construction needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                  <service.icon className="h-8 w-8 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 min-h-[72px]">{service.description}</p>
                <Link href={service.href} legacyBehavior>
                <Button
                  variant="outline"
                  className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
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
