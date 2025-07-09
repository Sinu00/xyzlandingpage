import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Star, Clock, Headphones, Truck, Building, Cog, Factory, Package, Home, Users, Shield, MapPin } from "lucide-react"
import Link from "next/link"

export default function ConstructionPage() {
  const constructionServices = [
    {
      id: "design-technical",
      title: "Design & Engineering Solutions",
      description: "Our Design & Engineering Solutions merge artistic creativity with technical expertise to transform ideas into comprehensive 2D and 3D representations.",
      services: [
        {
          name: "2D/3D Design & Visualization",
          description: "We create digital and physical representations that visualize design concepts with exceptional accuracy, incorporating contemporary trends for innovative solutions.",
          icon: Building
        },
        {
          name: "Engineering Blueprints",
          description: "Precise industry-standard engineering blueprints ensuring clear communication between design and construction teams for successful project realization.",
          icon: Cog
        },
        {
          name: "Exhibition Stand Design & Build",
          description: "Complete exhibition solutions from design to construction, creating impactful displays that effectively communicate your brand message and unique value.",
          icon: Factory
        }
      ]
    },
    {
      id: "operations-management", 
      title: "Project Operations & Management",
      description: "Complete project supervision and operational excellence from initial planning through final completion.",
      services: [
        {
          name: "Construction Oversight",
          description: "Professional construction supervision with qualified staff ensuring smooth coordination throughout all project phases.",
          icon: Cog
        },
        {
          name: "Material Procurement",
          description: "Strategic sourcing of premium materials with rigorous quality control to ensure only superior materials reach construction phases.",
          icon: Package
        },
        {
          name: "Project Coordination",
          description: "Advanced project management with effective resource allocation and personnel scheduling to meet deadlines and deliver expected outcomes.",
          icon: Building
        },
        {
          name: "Quality Assurance",
          description: "Stringent inspection and testing procedures ensuring superior construction quality in accordance with industry standards.",
          icon: Star
        },
        {
          name: "Setup & Ongoing Support",
          description: "Complete installation and maintenance services ensuring optimal functionality and long-term durability of construction projects.",
          icon: Cog
        },
        {
          name: "Progress Documentation",
          description: "Detailed reporting and documentation keeping stakeholders informed with clear communication throughout the project timeline.",
          icon: Clock
        }
      ]
    },
    {
      id: "production",
      title: "Manufacturing Excellence",
      description: "Advanced manufacturing capabilities providing precision-engineered solutions across diverse construction disciplines.",
      services: [
        {
          name: "Custom Carpentry",
          description: "Skilled craftsmen delivering custom carpentry solutions from architectural components to bespoke fittings and millwork.",
          icon: Building
        },
        {
          name: "Surface Finishing & Coating",
          description: "Professional surface treatments and protective coatings using contemporary methods for superior finishing quality.",
          icon: Factory
        },
        {
          name: "Acrylic Fabrication",
          description: "Custom acrylic solutions combining aesthetic appeal with technical precision for commercial and architectural applications.",
          icon: Package
        },
        {
          name: "Metalwork Solutions",
          description: "Custom metal fabrication services delivering structural and architectural solutions with superior quality hardware.",
          icon: Cog
        },
        {
          name: "Digital Printing Services",
          description: "High-quality digital printing for branded materials, signage, and exhibition graphics that create lasting professional impressions.",
          icon: Star
        }
      ]
    },
    {
      id: "logistics",
      title: "Supply Chain & Logistics",
      description: "Comprehensive supply chain coordination and management ensuring efficient and timely project execution.",
      services: [
        {
          name: "Project Logistics",
          description: "Complete supply chain coordination with efficient resource management and streamlined operations between project sites.",
          icon: Building
        },
        {
          name: "On-Site Management",
          description: "Expert management of complex project activities focused on construction site productivity and seamless coordination.",
          icon: Cog
        },
        {
          name: "Warehousing Solutions",
          description: "Secure storage facilities for construction materials and equipment, systematically organized for efficient project deployment.",
          icon: Package
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/heroconstruction.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            CONSTRUCTION <span className="text-red-600">EXCELLENCE</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Providing comprehensive construction solutions for industrial, commercial, and infrastructure developments 
            with unwavering commitment to quality, safety, and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Request Project Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Construction Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We offer complete construction solutions that blend technical mastery with innovative design 
              to produce outstanding results for industrial, commercial, and specialized construction projects.
            </p>
          </div>
        </div>
        </section>

      {/* Construction Service Categories */}
      {constructionServices.map((category) => (
        <section key={category.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="bg-gray-900 text-white py-2 -mx-4 sm:-mx-6 lg:-mx-8 mb-6">
                <h2 className="text-3xl md:text-4xl ">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">{category.description}</p>
              <Badge variant="outline" className="text-base px-6 py-2 border-red-500 text-red-500">
                {category.services.length} Professional Services
              </Badge>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200 h-full">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                        {service.name}
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
      ))}

      {/* Temporary Facilities - Dedicated Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
              Specialized Service
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Temporary</span> Facilities
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <strong>ASCEND ARABIA</strong> provides resources and expertise to efficiently coordinate the procurement, 
              set-up, maintenance and dismantle of a wide range of temporary facilities to support remote industrial 
              projects and/or emergency relief efforts. We have successfully installed various temporary facilities 
              to industrial clients on developing projects. We have worked with all major manufacturers of modular 
              trailer complexes throughout Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Main Feature - Portable Cabinets */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Home className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Portable Facilities Image</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Portable Cabinets and Containers</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our Portable Cabin services are essential for those customers who execute their work on 
                  different locations, sites. They can mount the cabin either in temporary or permanent basis or 
                  after execution of their projects, work they can dismount the same without any destruction. 
                  Those companies who run number of projects in same time can use the container for Business 
                  Conference, staying for their executives or for also employer who can stay in luxurious style on 
                  site without paying any luxury charges.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-red-50 px-4 py-2 rounded-full">
                    <span className="text-red-700 font-medium">Temporary Installation</span>
                  </div>
                  <div className="bg-red-50 px-4 py-2 rounded-full">
                    <span className="text-red-700 font-medium">Permanent Solutions</span>
                  </div>
                  <div className="bg-red-50 px-4 py-2 rounded-full">
                    <span className="text-red-700 font-medium">Easy Dismantling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Temporary Facilities for Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Get expert consultation for your temporary facility requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Construction Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Partner With Ascend Arabia</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Star,
                  title: "Superior Workmanship", 
                  description: "Experienced professionals delivering precise construction with meticulous attention to quality" 
                },
                {
                  icon: Clock,
                  title: "On-Schedule Delivery",
                  description: "Advanced project management ensuring punctual completion within agreed budgets",
                },
                { 
                  icon: Headphones,
                  title: "Complete Service", 
                  description: "Full project support from initial design through completion and ongoing maintenance" 
                },
                { 
                  icon: Truck,
                  title: "Integrated Solutions", 
                  description: "Complete construction capabilities with coordinated logistics and project management" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Construction Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with our construction experts for tailored project consultation and competitive estimates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 54 482 3155
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 