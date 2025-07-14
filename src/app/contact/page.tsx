import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
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
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+966 54 482 3155",
      description: "Available 24/7 for urgent construction needs",
      isClickable: true,
      href: "tel:+966544823155"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@ascendarabia.com",
      description: "Get detailed quotes and project discussions",
      isClickable: true,
      href: "mailto:info@ascendarabia.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Al Khobar, Kingdom of Saudi Arabia",
      description: "Serving KSA with nationwide project delivery",
      isClickable: false
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
      description: "",
      isClickable: false
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/herocontact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            GET IN <span className="text-red-500">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to start your construction project? Contact us today for expert consultation, 
            detailed quotes, and professional construction solutions.
          </p>
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
                {item.isClickable ? (
                  <a href={item.href} className="text-sm font-medium text-red-500 mb-2 hover:text-red-600 transition-colors block">
                    {item.details}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-red-500 mb-2">
                    {item.details}
                  </p>
                )}
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
            <ContactForm />
            
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