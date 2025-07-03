import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Industrial Complex Construction",
      category: "Heavy Equipment Rental",
      image: "/placeholder.svg?height=300&width=400",
      description: "Provided comprehensive equipment solutions for a major industrial facility construction project.",
    },
    {
      title: "Infrastructure Development",
      category: "Equipment Trading",
      image: "/placeholder.svg?height=300&width=400",
      description: "Supplied and maintained equipment fleet for large-scale infrastructure development.",
    },
    {
      title: "Oil & Gas Project",
      category: "Maintenance Services",
      image: "/placeholder.svg?height=300&width=400",
      description: "Long-term maintenance contract for specialized equipment in oil and gas operations.",
    },
    {
      title: "Mining Operations",
      category: "Project Solutions",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete equipment support for mining operations including logistics and technical support.",
    },
    {
      title: "Power Plant Construction",
      category: "Equipment Rental",
      image: "/placeholder.svg?height=300&width=400",
      description: "Specialized equipment rental for power generation facility construction.",
    },
    {
      title: "Commercial Development",
      category: "Technical Consulting",
      image: "/placeholder.svg?height=300&width=400",
      description: "Equipment consulting and optimization for large commercial development project.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise across diverse industries and challenging projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 font-semibold mb-2">{project.category}</div>
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
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
