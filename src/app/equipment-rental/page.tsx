import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, Star, Clock, Headphones, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EquipmentCategoriesPage() {
  const equipmentCategories = [
    {
      id: "earth-moving",
      title: "Earth Moving Equipment",
      description: "Heavy-duty machinery for excavation, grading, and earth moving operations",
      image: "/placeholder.svg?height=300&width=400",
      equipmentCount: 8,
      color: "bg-amber-600",
      equipment: [
        { name: "Cranes", image: "/equipment-rental/earth-moving-equipment/cranes.jpg" },
        { name: "Excavator", image: "/equipment-rental/earth-moving-equipment/excavator.jpg" },
        { name: "Dozer", image: "/equipment-rental/earth-moving-equipment/dozer.jpg" },
        { name: "Wheel Loader", image: "/equipment-rental/earth-moving-equipment/wheelloader.jpg" },
        { name: "Grader", image: "/equipment-rental/earth-moving-equipment/grader.jpg" },
        { name: "Bobcat", image: "/equipment-rental/earth-moving-equipment/bobcat.jpg" },
        { name: "Roller Compactor", image: "/equipment-rental/earth-moving-equipment/rollercompactor.jpg" },
        { name: "Backhoe Loader", image: "/equipment-rental/earth-moving-equipment/backhoeloader.jpg" },
      ],
    },
    {
      id: "transportation",
      title: "Transportation",
      description: "Efficient and prompt transportation solutions for all cargo types",
      image: "/placeholder.svg?height=300&width=400",
      equipmentCount: 10,
      color: "bg-amber-600",
      equipment: [
        { name: "Dyna", image: "/equipment-rental/transportation/dyna.jpg" },
        { name: "Flat Bed Truck", image: "/equipment-rental/transportation/flatbedtruck.jpg" },
        { name: "AC / Non AC Buses", image: "/equipment-rental/transportation/buses.jpg" },
        { name: "Mini Bus", image: "/equipment-rental/transportation/minibus.jpg" },
        { name: "Pickup Truck", image: "/equipment-rental/transportation/pickuptruck.jpg" },
        { name: "Water Tanker", image: "/equipment-rental/transportation/watertanker.jpg" },
        { name: "Boom Trucks", image: "/equipment-rental/transportation/boomtrucks.jpg" },
        { name: "Winch Truck", image: "/equipment-rental/transportation/winchtruck.jpg" },
        { name: "Vaccume Tankers", image: "/equipment-rental/transportation/vacuumtankers.jpg" },
        { name: "Low Bed Trailer", image: "/equipment-rental/transportation/lowbedtrailer.jpg" },
      ],
    },
    {
      id: "crane",
      title: "Crane",
      description: "Mobile cranes, tower cranes, and specialized lifting equipment",
      image: "/placeholder.svg?height=300&width=400",
      equipmentCount: 3,
      color: "bg-amber-600",
      equipment: [
        { name: "Mobile Cranes", image: "/equipment-rental/crane-equipment/mobilecranes.jpg" },
        { name: "Rough Cranes", image: "/equipment-rental/crane-equipment/roughcranes.jpg" },
        { name: "Crawler Cranes", image: "/equipment-rental/crane-equipment/crawlercranes.jpg" },
      ],
    },
    {
      id: "light-equipment",
      title: "Light Equipment",
      description: "Compact and versatile equipment for smaller construction tasks",
      image: "/placeholder.svg?height=300&width=400",
      equipmentCount: 9,
      color: "bg-amber-600",
      equipment: [
        { name: "Man Lifts", image: "/equipment-rental/light-equipment/manlifts.jpg" },
        { name: "Tele Handler", image: "/equipment-rental/light-equipment/telehandler.jpg" },
        { name: "Scissor Lifts", image: "/equipment-rental/light-equipment/scissorlifts.jpg" },
        { name: "Tower Lights", image: "/equipment-rental/light-equipment/towerlights.jpg" },
        { name: "Welding Machines", image: "/equipment-rental/light-equipment/weldingmachines.jpg" },
        { name: "Welding Generators", image: "/equipment-rental/light-equipment/weldinggenerators.jpg" },
        { name: "Generators", image: "/equipment-rental/light-equipment/generators.jpg" },
        { name: "Air Compressor", image: "/equipment-rental/light-equipment/aircompressor.jpg" },
        { name: "Fork Lift", image: "/equipment-rental/light-equipment/forklift.jpg" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/heroamber.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            EQUIPMENT <span className="text-amber-500">RENTAL</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Professional-grade equipment for all your construction and industrial needs. 
            Reliable, maintained, and ready to power your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Instant Quote
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We offer wide range of industrial machines, equipment and vehicles for all your industrial, construction
              and marine requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      {equipmentCategories.map((category) => (
        <section key={category.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="bg-amber-600 text-white py-2 -mx-4 sm:-mx-6 lg:-mx-8 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">{category.description}</p>
              <Badge variant="outline" className="text-base px-6 py-2 border-amber-600 text-amber-600">
                {category.equipmentCount} Units Available
              </Badge>
            </div>

            {/* Equipment Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.equipment.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-200">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-gray-900 text-center group-hover:text-amber-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* Why Choose Our Equipment */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Equipment Rental</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Star,
                  title: "Latest Models", 
                  description: "Modern, well-maintained equipment from leading manufacturers" 
                },
                {
                  icon: Clock,
                  title: "Flexible Terms",
                  description: "Daily, weekly, monthly, and long-term rental options available",
                },
                { 
                  icon: Headphones,
                  title: "Full Support", 
                  description: "24/7 technical support and maintenance services included" 
                },
                { 
                  icon: Truck,
                  title: "Nationwide Delivery", 
                  description: "Equipment delivery and pickup across Saudi Arabia" 
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-amber-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Equipment for Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our equipment specialists for personalized recommendations and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 50 948 1444
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
 