import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  Building, 
  Truck, 
  Wrench,
  Lightbulb,
  Target,
  Heart,
  Leaf
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Years of Experience",
      description: "Decade of excellence in construction"
    },
    {
      icon: Building,
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered projects"
    },
    {
      icon: Users,
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers across KSA"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock customer service"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "We prioritize the highest standards of quality and safety in every project, ensuring compliance with international construction standards and regulations."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Our commitment to meeting deadlines while maintaining quality standards has earned us the trust of clients across various industries."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "With over a decade of experience, we have built a reputation for being a dependable partner in all construction and industrial projects."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We believe in building long-term relationships with our clients by understanding their unique needs and delivering tailored solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously adopt new technologies and innovative approaches to improve efficiency and deliver better results for our clients."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We are committed to sustainable construction practices that minimize environmental impact while maximizing project value."
    }
  ]

  const services = [
    {
      icon: Building,
      title: "Construction Services",
      description: "Complete construction solutions from design to completion"
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Premium construction equipment and machinery rental"
    },
    {
      icon: Users,
      title: "Skilled Manpower",
      description: "Experienced workforce for all construction needs"
    },
    {
      icon: Wrench,
      title: "Material Trading",
      description: "Quality construction materials and industrial supplies"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/heroaboutus.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            ABOUT <span className="text-red-500">Ascend Arabia</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Leading the construction industry in Saudi Arabia with over a decade of excellence, 
            innovation, and commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Award className="mr-2 h-5 w-5" />
              Our Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-500" />
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional construction services, premium equipment rental, and skilled manpower solutions 
                that exceed client expectations while maintaining the highest standards of quality, safety, and innovation. 
                We are committed to building Saudi Arabia&apos;s infrastructure and supporting the Kingdom&apos;s Vision 2030.
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading construction and industrial services company in Saudi Arabia, recognized for our 
                commitment to excellence, innovation, and sustainability. We aspire to be the preferred partner for 
                major infrastructure projects that shape the future of the Kingdom.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ascend Arabia began as a small construction company with a vision to provide exceptional construction and industrial services in Saudi Arabia.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we serve clients across various industries including oil & gas, manufacturing, infrastructure, 
                  and commercial development. Our success is built on the foundation of quality workmanship, reliable 
                  service, and strong client relationships.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We take pride in our contribution to Saudi Arabia&apos;s development and continue to invest in the latest 
                  technologies and training to ensure we remain at the forefront of the construction industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <Image 
                  src="/hero/heroequipmentrental.jpg" 
                  alt="Construction team at work"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and industrial solutions tailored to meet your project needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries across Saudi Arabia with specialized knowledge and experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oil & Gas",
                description: "Supporting the energy sector with specialized construction and maintenance services for refineries, petrochemical plants, and offshore facilities."
              },
              {
                title: "Manufacturing",
                description: "Industrial construction solutions for manufacturing facilities, warehouses, and production plants with focus on operational efficiency."
              },
              {
                title: "Infrastructure",
                description: "Contributing to Saudi Arabia&apos;s infrastructure development through road construction, bridges, and public utilities projects."
              },
              {
                title: "Commercial",
                description: "Office buildings, retail complexes, and mixed-use developments that meet modern architectural and functional requirements."
              },
              {
                title: "Residential",
                description: "Quality housing solutions from individual homes to large residential complexes, ensuring comfortable living spaces."
              },
              {
                title: "Healthcare",
                description: "Specialized construction for hospitals, clinics, and healthcare facilities with strict compliance to medical facility standards."
              }
            ].map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your next construction project and how we can help bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
          >
            <Users className="mr-2 h-5 w-5" />
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
} 