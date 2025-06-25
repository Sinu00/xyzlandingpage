import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Settings, ShoppingCart, Wrench, Building, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Wide range of construction and industrial equipment available for short-term and long-term rental.",
      features: [
        "Excavators & Bulldozers",
        "Cranes & Lifting Equipment",
        "Generators & Compressors",
        "Specialized Machinery",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Equipment Trading",
      description: "Buy and sell new and used equipment with comprehensive quality assurance and warranty.",
      features: ["New Equipment Sales", "Used Equipment Trading", "Equipment Valuation", "Trade-in Services"],
    },
    {
      icon: Settings,
      title: "Maintenance Services",
      description: "Professional maintenance and repair services to keep your equipment running at peak performance.",
      features: ["Preventive Maintenance", "Emergency Repairs", "Parts & Components", "Technical Support"],
    },
    {
      icon: Building,
      title: "Project Solutions",
      description: "Complete project support with equipment planning, logistics, and on-site technical assistance.",
      features: ["Project Planning", "Equipment Logistics", "On-site Support", "Training Services"],
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert advice on equipment selection, optimization, and operational efficiency improvements.",
      features: ["Equipment Selection", "Efficiency Analysis", "Cost Optimization", "Performance Monitoring"],
    },
    {
      icon: Zap,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency support and rapid response for critical equipment failures.",
      features: ["Emergency Response", "Field Service", "Remote Diagnostics", "Priority Support"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive equipment solutions tailored to meet your industrial and construction needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
