import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Star, Clock, Headphones, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MaterialTradingPage() {
  const materialCategories = [
    {
      id: "safety-equipment",
      title: "Safety Equipment & PPE",
      description: "Comprehensive personal protective equipment and safety gear to ensure workplace safety and compliance with international standards.",
      materials: [
        { name: "Safety Helmets & Hard Hats", description: "High-impact protection helmets meeting international safety standards", image: "/material-trading/safety-equipment/safety-helmets.jpg" },
        { name: "Safety Gloves", description: "Cut-resistant and chemical-resistant gloves for various applications", image: "/material-trading/safety-equipment/safety-gloves.jpg" },
        { name: "Safety Boots", description: "Steel-toe and slip-resistant safety footwear", image: "/material-trading/safety-equipment/safety-boots.jpg" },
        { name: "High-Visibility Vests", description: "Reflective safety vests for enhanced visibility", image: "/material-trading/safety-equipment/high-visibility-vests.jpg" },
        { name: "Safety Glasses & Goggles", description: "Eye protection equipment for various work environments", image: "/material-trading/safety-equipment/safety-glasses-goggles.jpg" },
        { name: "Ear Protection", description: "Noise-canceling headphones and earplugs", image: "/material-trading/safety-equipment/ear-protection.jpg" },
        { name: "Respiratory Masks", description: "Dust masks and respirators for air quality protection", image: "/material-trading/safety-equipment/respiratory-masks.jpg" },
        { name: "Safety Harnesses", description: "Fall protection harnesses and lanyards", image: "/material-trading/safety-equipment/safety-harnesses.jpg" },
        { name: "Safety Barrier Tape", description: "Warning and caution tapes for site demarcation", image: "/material-trading/safety-equipment/safety-barrier-tape.jpg" }
      ]
    },
    {
      id: "construction-materials",
      title: "Construction Materials",
      description: "High-quality building materials for structural, finishing, and specialized construction applications.",
      materials: [
        { name: "Structural Steel", description: "I-beams, H-beams, and structural steel components", image: "/material-trading/construction-materials/structural-steel.jpg" },
        { name: "Reinforcement Bars", description: "Rebar and steel reinforcement materials", image: "/material-trading/construction-materials/reinforcement-bars.jpg" },
        { name: "Building Bricks", description: "Clay bricks and concrete blocks for construction", image: "/material-trading/construction-materials/building-bricks.jpg" },
        { name: "Floor Tiles", description: "Ceramic, porcelain, and specialty flooring tiles", image: "/material-trading/construction-materials/floor-tiles.jpg" },
        { name: "Glass Sheets", description: "Tempered and laminated glass for construction", image: "/material-trading/construction-materials/glass-sheets.jpg" },
        { name: "Lumber & Wood Planks", description: "Treated and untreated lumber for construction", image: "/material-trading/construction-materials/lumber-wood-planks.jpg" },
        { name: "Insulation Materials", description: "Thermal and acoustic insulation products", image: "/material-trading/construction-materials/insulation-materials.jpg" },
        { name: "Roofing Materials", description: "Shingles, metal roofing, and waterproofing materials", image: "/material-trading/construction-materials/roofing-materials.jpg" }
      ]
    },
    {
      id: "power-tools-equipment",
      title: "Power Tools & Equipment",
      description: "Professional-grade power tools and equipment for construction, maintenance, and industrial applications.",
      materials: [
        { name: "Circular Saws", description: "Heavy-duty circular saws for cutting various materials", image: "/material-trading/power-tools-equipment/circular-saws.jpg" },
        { name: "Power Drills", description: "Corded and cordless drills with various attachments", image: "/material-trading/power-tools-equipment/power-drills.jpg" },
        { name: "Angle Grinders", description: "High-performance grinders for cutting and polishing", image: "/material-trading/power-tools-equipment/angle-grinders.jpg" },
        { name: "Sanders", description: "Orbital and belt sanders for surface finishing", image: "/material-trading/power-tools-equipment/sanders.jpg" },
        { name: "Multi-tools", description: "Versatile oscillating tools for multiple applications", image: "/material-trading/power-tools-equipment/multi-tools.jpg" },
        { name: "Generators", description: "Portable generators for on-site power supply", image: "/material-trading/power-tools-equipment/generators.jpg" },
        { name: "Vacuum Cleaners", description: "Industrial vacuum cleaners for site cleanup", image: "/material-trading/power-tools-equipment/vacuum-cleaners.jpg" },
        { name: "Tool Cases & Storage", description: "Professional tool storage and organization systems", image: "/material-trading/power-tools-equipment/tool-cases.jpg" }
      ]
    },
    {
      id: "industrial-hardware",
      title: "Industrial Hardware & Fittings",
      description: "Precision-engineered hardware, fittings, and components for industrial and marine applications.",
      materials: [
        { name: "Pipes & Tubes", description: "Stainless steel, carbon steel, and alloy pipes", image: "/material-trading/industrial-hardware/pipes-tubes.jpg" },
        { name: "Valves", description: "Ball valves, gate valves, and specialty industrial valves", image: "/material-trading/industrial-hardware/valves.jpg" },
        { name: "Flanges", description: "ANSI, DIN, and JIS standard flanges", image: "/material-trading/industrial-hardware/flanges.jpg" },
        { name: "Forged Fittings", description: "High-pressure forged pipe fittings", image: "/material-trading/industrial-hardware/forged-fittings.jpg" },
        { name: "Butt Weld Fittings", description: "Seamless butt weld fittings and reducers", image: "/material-trading/industrial-hardware/butt-weld-fittings.jpg" },
        { name: "PVC Fittings", description: "Plastic pipe fittings and connectors", image: "/material-trading/industrial-hardware/pvc-fittings.jpg" },
        { name: "Gaskets & Seals", description: "Industrial gaskets and sealing solutions", image: "/material-trading/industrial-hardware/gaskets-seals.jpg" },
        { name: "Stud Bolts & Fasteners", description: "High-strength bolts and fastening hardware", image: "/material-trading/industrial-hardware/stud-bolts-fasteners.jpg" }
      ]
    },
    {
      id: "lifting-material-handling",
      title: "Lifting & Material Handling",
      description: "Equipment and accessories for safe lifting, moving, and material handling operations.",
      materials: [
        { name: "Lifting Equipment", description: "Hoists, winches, and lifting accessories", image: "/material-trading/lifting-material-handling/lifting-equipment.jpg" },
        { name: "Hand Trucks & Dollies", description: "Manual material handling equipment", image: "/material-trading/lifting-material-handling/hand-trucks-dollies.jpg" },
        { name: "Packaging Materials", description: "Cardboard boxes, plastic wrapping, and containers", image: "/material-trading/lifting-material-handling/packaging-materials.jpg" },
        { name: "Material Handling Accessories", description: "Straps, chains, and rigging hardware", image: "/material-trading/lifting-material-handling/material-handling-accessories.jpg" },
        { name: "Storage Solutions", description: "Industrial shelving and storage systems", image: "/material-trading/lifting-material-handling/storage-solutions.jpg" },
        { name: "Transport Equipment", description: "Carts, trolleys, and mobile storage units", image: "/material-trading/lifting-material-handling/transport-equipment.jpg" }
      ]
    },
    {
      id: "electrical-instrumentation",
      title: "Electrical & Instrumentation",
      description: "Electrical products, instrumentation, and control systems for industrial applications.",
      materials: [
        { name: "Electrical Cables & Wires", description: "Power and control cables for industrial use", image: "/material-trading/electrical-instrumentation/electrical-cables-wires.jpg" },
        { name: "Electrical Panels", description: "Distribution panels and control boxes", image: "/material-trading/electrical-instrumentation/electrical-panels.jpg" },
        { name: "Instrumentation Fittings", description: "Tube fittings for instrumentation systems", image: "/material-trading/electrical-instrumentation/instrumentation-fittings.jpg" },
        { name: "Control Devices", description: "Switches, sensors, and control equipment", image: "/material-trading/electrical-instrumentation/control-devices.jpg" },
        { name: "Lighting Solutions", description: "Industrial and emergency lighting systems", image: "/material-trading/electrical-instrumentation/lighting-solutions.jpg" },
        { name: "Power Distribution", description: "Transformers, switchgear, and distribution equipment", image: "/material-trading/electrical-instrumentation/power-distribution.jpg" }
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero/heromaterialtrading.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 tracking-tight">
            MATERIAL <span className="text-red-600">TRADING</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive supply of high-quality industrial materials, safety equipment, and construction supplies 
            for all your project requirements with guaranteed quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Material Quote
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Material Supply</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We supply a comprehensive range of industrial materials, safety equipment, and construction supplies 
              for industrial, commercial, and marine projects ensuring quality and timely delivery.
            </p>
          </div>
        </div>
        </section>

      {/* Material Categories */}
      {materialCategories.map((category) => (
        <section key={category.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="bg-gray-900 text-white py-2 -mx-4 sm:-mx-6 lg:-mx-8 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">{category.description}</p>
            </div>

            {/* Materials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.materials.map((material, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-200">
                    <div className="w-full h-auto overflow-hidden">
                      <Image
                        src={material.image || "/placeholder.svg"}
                        alt={material.name}
                        width={512}
                        height={512}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-900 text-center group-hover:text-red-500 transition-colors duration-300">
                        {material.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Materials */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Material Supply</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Star,
                  title: "Quality Assured", 
                  description: "All materials meet international standards with proper certifications" 
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description: "Efficient logistics ensuring on-time delivery to your project site",
                },
                { 
                  icon: Headphones,
                  title: "Expert Support", 
                  description: "Technical assistance and material specification guidance" 
                },
                { 
                  icon: Truck,
                  title: "Nationwide Supply", 
                  description: "Material delivery and logistics across Saudi Arabia" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Materials for Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our material specialists for competitive pricing and bulk supply solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              <Phone className="mr-2 h-5 w-5" />
              Call +966 54 482 3155
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