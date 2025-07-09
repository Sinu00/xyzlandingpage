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
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100/50 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced content section */}
          <div className="space-y-8">
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                About <span className="text-red-500">Cutting-Edge</span> Equipment Solutions
            </h2>
              <div className="w-20 h-1 bg-red-500 mb-8 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Ascend Arabia is committed to transforming visions into realities, grounded in the foundations
              we lay. We go beyond conventional boundaries to create a legacy defined by exceptional excellence in every
              project we undertake.
            </p>

            {/* Enhanced features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Enhanced icon with gradient background */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500 transform group-hover:scale-110">
                    <stat.icon className="h-8 w-8 text-red-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Enhanced stats display */}
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
