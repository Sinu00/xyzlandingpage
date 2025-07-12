import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Wrench, 
  Truck, 
  Building, 
  Users, 
  Phone, 
  CheckCircle, 
  Star,
  Clock,
  Shield,
  Award,
  ArrowRight,
  Target,
  Globe
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Wrench,
      title: "Material Trading",
      description: "Comprehensive supply of industrial materials, valves, pipes, fittings, and construction supplies.",
      image: "/servicepage/material-trading.jpg",
      href: "/material-trading",
      features: [
        "Industrial Hardware & Fittings",
        "Construction Materials",
        "Electrical & Instrumentation",
        "Safety Equipment",
        "Power Tools & Equipment",
        "Lifting & Material Handling"
      ]
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Wide range of construction and industrial equipment for short-term and long-term rental.",
      image: "/servicepage/equipment-rental.jpg",
      href: "/equipment-rental",
      features: [
        "Earth Moving Equipment",
        "Lifting & Crane Equipment", 
        "Transportation Vehicles",
        "Light Construction Equipment",
        "24/7 Technical Support",
        "Nationwide Delivery"
      ]
    },
    {
      icon: Building,
      title: "Construction Services",
      description: "Expert construction solutions for industrial, commercial, and infrastructure projects.",
      image: "/servicepage/construction.jpg",
      href: "/construction", 
      features: [
        "Industrial Construction",
        "Commercial Buildings",
        "Infrastructure Projects",
        "Renovation & Maintenance",
        "Project Management",
        "Quality Assurance"
      ]
    },
    {
      icon: Users,
      title: "Skilled Manpower",
      description: "Experienced workforce solutions to meet your project requirements efficiently.",
      image: "/servicepage/manpower.jpg",
      href: "/manpower",
      features: [
        "Skilled Technicians",
        "Construction Workers",
        "Equipment Operators",
        "Safety Specialists",
        "Project Supervisors",
        "Administrative Staff"
      ]
    }
  ]

  const benefits = [
    {
      icon: Star,
      title: "Quality Excellence",
      description: "Committed to delivering the highest standards of quality in every service we provide."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Meeting project deadlines while maintaining quality standards across all services."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols ensuring secure operations in all our services."
    },
    {
      icon: Award,
      title: "Proven Experience",
      description: "Over a decade of experience delivering successful projects across Saudi Arabia."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored services designed to meet specific client requirements and project needs."
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Comprehensive service coverage across the Kingdom of Saudi Arabia."
    }
  ]

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered"
    },
    {
      number: "4",
      label: "Core Services",
      description: "Comprehensive solutions"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock service"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Industry expertise"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            OUR <span className="text-red-500">SERVICES</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive industrial solutions designed to support your construction 
            and infrastructure projects with excellence and reliability.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Four comprehensive service divisions designed to meet all your industrial and construction needs
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 p-0 overflow-hidden">
                    <div className="aspect-[600/512] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={512}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-red-500" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={service.href}>
                    <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ascend Arabia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages that set us apart in the Saudi Arabian industrial services market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient steps to get your project started
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your project requirements and objectives"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Develop customized solution and timeline"
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional implementation with quality assurance"
              },
              {
                step: "04",
                title: "Support", 
                description: "Ongoing maintenance and customer service"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our specialists for customized solutions and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+966544823155" className="w-full sm:w-auto">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg w-full">
                <Phone className="mr-2 h-5 w-5" />
                Call +966 54 482 3155
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg w-full"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 