import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Star, Clock, Headphones, Truck, Users, Shield, Award } from "lucide-react"
import Link from "next/link"

export default function ManpowerPage() {
  const manpowerServices = [
    {
      title: "Skilled Labor Supply",
      description: "Experienced craftsmen and skilled workers for all construction trades",
      icon: Users
    },
    {
      title: "Technical Staff",
      description: "Engineers, supervisors, and technical specialists for complex projects",
      icon: Award
    },
    {
      title: "Project Management Teams",
      description: "Dedicated project managers to oversee and coordinate construction activities",
      icon: Clock
    },
    {
      title: "Safety Officers",
      description: "Certified safety professionals ensuring workplace safety and compliance",
      icon: Shield
    },
    {
      title: "Administrative Support",
      description: "Office staff and administrative personnel for project coordination",
      icon: Headphones
    },
    {
      title: "On-site Workforce Solutions",
      description: "Complete workforce deployment for construction sites and industrial projects",
      icon: Truck
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/heromanpower.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            SKILLED <span className="text-red-600">MANPOWER</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Providing skilled and experienced workforce solutions to meet your project requirements 
            with qualified professionals who deliver excellence on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Workforce Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Manpower Services</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We provide skilled workforce solutions across all construction trades and specialties, 
              ensuring your projects are staffed with qualified professionals who meet industry standards.
            </p>
            <Badge variant="outline" className="text-base px-6 py-2 border-red-500 text-red-500 mt-4">
              {manpowerServices.length} Specialized Services
            </Badge>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manpowerServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Workforce */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Workforce Solutions</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Star,
                  title: "Skilled Professionals", 
                  description: "Certified and experienced workforce across all construction trades" 
                },
                {
                  icon: Clock,
                  title: "Timely Deployment",
                  description: "Quick mobilization of workforce to meet project schedules",
                },
                { 
                  icon: Shield,
                  title: "Safety Certified", 
                  description: "All personnel trained in safety protocols and industry standards" 
                },
                { 
                  icon: Headphones,
                  title: "Complete Support", 
                  description: "Full HR support and workforce management throughout projects" 
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Staff Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with our workforce specialists for tailored manpower solutions and competitive rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 54 482 3155
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request Workforce Quote
              </Button>
            </Link>
          </div>
        </div>
        </section>

      <Footer />
    </div>
  )
} 