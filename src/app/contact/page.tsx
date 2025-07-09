import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building, 
  Users, 
  Wrench, 
  Truck,
  Send,
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+966 54 482 3155",
      description: "Available 24/7 for urgent construction needs"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@Ascend Arabia.com",
      description: "Get detailed quotes and project discussions"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kingdom of Saudi Arabia",
      description: "Serving KSA with nationwide project delivery"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: (
        <>
          Sun - Thu: 8:00 AM - 5:00 PM <br />
          Sat: 10:00 AM - 03:00 PM
        </>
      ),
      description: "Extended hours for ongoing projects"
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

  const projectTypes = [
    "Industrial Construction",
    "Commercial Buildings",
    "Infrastructure Projects",
    "Equipment Rental",
    "Maintenance Services",
    "Material Supply",
    "Skilled Labor",
    "Project Management"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/herocontact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            GET IN <span className="text-red-500">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to start your construction project? Contact us today for expert consultation, 
            detailed quotes, and professional construction solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your construction needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-red-500 mb-2">
                  {item.details}
                </p>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed response.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Your last name"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966 54 482 3155"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select 
                      id="projectType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your project, timeline, budget, and specific requirements..."
                      className="w-full min-h-[10px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            {/* Services & Benefits */}
            <div className="space-y-8">
              {/* Our Services */}
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Why Choose Us */}
              <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {[
                    "Licensed and insured construction company",
                    "Over 10 years of experience in Saudi Arabia",
                    "24/7 customer support and emergency services",
                    "Competitive pricing with transparent quotes",
                    "Quality materials and skilled workforce",
                    "On-time project delivery guarantee"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 