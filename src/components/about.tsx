import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: CheckCircle, label: "Projects Completed", value: "100+" },
    { icon: Clock, label: "24/7 Support", value: "Always" },
  ]

  const features = [
    "Premium Quality Equipment",
    "Competitive Pricing",
    "Expert Technical Support",
    "Flexible Rental Terms",
    "Comprehensive Maintenance",
    "Nationwide Coverage",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-red-500"> Cutting-Edge</span> Equipment Solutions
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              XYZ Equipment Solutions is committed to transforming visions into realities, grounded in the foundations
              we lay. We go beyond conventional boundaries to create a legacy defined by exceptional excellence in every
              project we undertake.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
