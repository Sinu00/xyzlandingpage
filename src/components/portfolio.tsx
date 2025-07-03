import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Portfolio() {
  const projects: {
    title: string;
    category: string;
    description: string;
    image: string;
    duration: string;
    location: string;
  }[] = [
    {
      title: "Industrial Complex Construction",
      category: "Construction",
      description: "Complete construction of a 50,000 sq ft industrial facility with modern equipment and infrastructure.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "12 months",
      location: "Riyadh, SA"
    },
    {
      title: "Mining Equipment Supply",
      category: "Equipment Rental",
      description: "Provided heavy machinery and equipment for large-scale mining operations in the northern region.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "18 months",
      location: "Tabuk, SA"
    },
    {
      title: "Infrastructure Development",
      category: "Construction",
      description: "Road construction and infrastructure development project spanning 200km of highway construction.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "24 months",
      location: "Eastern Province, SA"
    },
    {
      title: "Oil & Gas Facility",
      category: "Material Trading",
      description: "Supply of specialized materials and equipment for offshore oil and gas extraction facility.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "15 months",
      location: "Dammam, SA"
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise across diverse industries and challenging projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-500 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.duration}</span>
                  <span className="text-sm text-gray-500">{project.location}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-500 hover:bg-red-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
