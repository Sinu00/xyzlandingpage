import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Star, Clock, Headphones, Truck, Building, Cog, Factory, Package } from "lucide-react"
import Link from "next/link"

export default function ConstructionPage() {
  const constructionServices = [
    {
      id: "design-technical",
      title: "Design & Technical Drawings",
      description: "Our Design & Technical Drawing services combine creative vision with technical precision to bring concepts to life in 2D and 3D formats.",
      services: [
        {
          name: "2D/3D Creative Design & Adaptation",
          description: "We specialize in creating both digital and physical models that assist in visualizing design and creative concepts with precision. Our design solutions incorporate trends that lead to innovative designs specifically positioned to stand out and make a lasting impression.",
          icon: Building
        },
        {
          name: "Technical Drawings",
          description: "Our technical drawings service uses precise standard engineering techniques to deliver drawings with accuracy, ensuring seamless communication between the engineering and manufacturing teams in bringing designs to reality.",
          icon: Cog
        },
        {
          name: "Exhibition Booth Design and Manufacturing",
          description: "Our services are tailored to create memorable, outstanding exhibition experiences for our clients. We deliver customer-centric designs that highlight each brand message and showcase their unique selling points with exceptional booth construction and management that ensures your exhibition space stands out and makes your displays and events pop.",
          icon: Factory
        }
      ]
    },
    {
      id: "operations-management", 
      title: "Operations & Project Management",
      description: "Comprehensive project oversight and operational excellence from concept to completion.",
      services: [
        {
          name: "Production Supervision",
          description: "Our production supervision operations and high-quality personnel are geared to ensure seamless integration during project phases.",
          icon: Cog
        },
        {
          name: "Material Sourcing",
          description: "Our Material Sourcing operations focus quality materials, ensuring the best possible materials. Our sourcing ensures only quality materials hit the manufacturing and assembly lines.",
          icon: Package
        },
        {
          name: "Project Management",
          description: "Our project Management employs advanced construction and engineering frameworks, including information and execution. We understand that deadlines matter and every project demands efficient resource and personnel planning and scheduling to achieve project milestones and expected deliverables.",
          icon: Building
        },
        {
          name: "Quality Control",
          description: "Our Quality Control service ensures products manufactured are implementing rigorous inspection and testing processes to ensure maximum quality of construction products in line with quality standards for reliable construction delivery to our clients.",
          icon: Star
        },
        {
          name: "Installations & Maintenance",
          description: "We provide comprehensive installation and maintenance services to ensure optimal performance and longevity of construction projects.",
          icon: Cog
        },
        {
          name: "Reporting",
          description: "Comprehensive progress reports and documentation ensure stakeholders are informed at every stage of the construction process. We provide detailed updates and transparent communication throughout the project lifecycle.",
          icon: Clock
        }
      ]
    },
    {
      id: "production",
      title: "Production",
      description: "Specialized manufacturing capabilities delivering precision-crafted solutions across multiple disciplines.",
      services: [
        {
          name: "Specialist Joinery",
          description: "Our Specialist Joinery Service specializes in carry design with focus on your specific requirements. From architectural elements to custom fittings, Millwork/Casework to design implementation. Our experienced carpenters and joiners deliver outstanding results.",
          icon: Building
        },
        {
          name: "Painting and Lacquering",
          description: "Our Painting and Lacquering services deliver superior protection and beautiful finishes with modern techniques. We ensure expert-level surface painting that maintains painting integrity providing high-quality finishing.",
          icon: Factory
        },
        {
          name: "Acrylic",
          description: "Our Acrylic service specialist in crafting custom Acrylic that integrate beauty with precision. From high-spec commercial materials and functional, to architectural displays for your design specifications. From signage to architectural displays our experience promises enhanced product quality designed for durability and outstanding results.",
          icon: Package
        },
        {
          name: "Metal",
          description: "Our Metal service specializes in crafting custom metal solutions that integrate beauty with precision. From high-spec commercial materials and functional to product and architectural, promises to manufacture that integrate beauty with high quality hardware in fabrication structural and architectural solutions.",
          icon: Cog
        },
        {
          name: "Screen Printing",
          description: "Our Screen Printing efficiently delivers superb screen designs and images. From branded promotional materials to construction site graphics, our services help provide graphics materials. Our projects graphics expertise is to ensure materials from branded products to exhibitions that reflect the value of business and organization. The services ensure materials leave an lasting impression.",
          icon: Star
        }
      ]
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "End-to-end supply chain management and coordination ensuring timely project delivery.",
      services: [
        {
          name: "Project Coordination",
          description: "The logistics service encompasses all aspects of supply chain management including operations, engineering logistics and implementation. We effectively utilize the organizational processes and efficient management of resources, facilitating movement between job-to-site and offices to resolve management solutions.",
          icon: Building
        },
        {
          name: "Site Operations",
          description: "Coordination of complex project-based activities, shipping logistics and implementation focused on job-site efficiency. We ensure seamless communication and resource management throughout all project phases.",
          icon: Cog
        },
        {
          name: "Storage",
          description: "Professional storage solutions for construction materials, equipment, and finished components. Our secure facilities ensure materials are protected and organized for efficient project deployment.",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            CONSTRUCTION <span className="text-red-600">SERVICES</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Delivering expert construction services for industrial, commercial, and infrastructure projects 
            with a focus on quality, safety, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Project Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Construction Services</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive construction services combining technical expertise with creative innovation 
              to deliver exceptional results for industrial, commercial, and specialized projects.
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
                {category.services.length} Specialized Services
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

      {/* Why Choose Our Construction Services */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Construction Services</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Star,
                  title: "Expert Craftsmanship", 
                  description: "Skilled professionals delivering precision construction with attention to detail" 
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description: "Project management excellence ensuring on-time completion within budget",
                },
                { 
                  icon: Headphones,
                  title: "Full Support", 
                  description: "Comprehensive project support from design through completion and maintenance" 
                },
                { 
                  icon: Truck,
                  title: "Complete Solutions", 
                  description: "End-to-end construction services with integrated logistics and coordination" 
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our construction specialists for personalized project consultation and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 548613433
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