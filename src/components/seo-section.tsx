import { Card } from "@/components/ui/card"
import { Building, MapPin, Star, Users, Award } from "lucide-react"

export default function SEOSection() {
  return (
    <section className="sr-only">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ascend Arabia - Construction Company in Al Khobar, Saudi Arabia
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Professional construction services, equipment rental, material trading, and manpower solutions in Al Khobar, Dammam, and across the Kingdom of Saudi Arabia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Construction Company Al Khobar
            </h3>
            <p className="text-gray-600 text-sm">
              Industrial and commercial construction projects in Al Khobar, Dammam, and Eastern Province
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Equipment Rental Khobar
            </h3>
            <p className="text-gray-600 text-sm">
              Construction equipment and machinery rental services in Al Khobar and surrounding areas
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Manpower Services Al Khobar
            </h3>
            <p className="text-gray-600 text-sm">
              Skilled construction workers, technicians, and project supervisors in Al Khobar
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Material Trading Saudi Arabia
            </h3>
            <p className="text-gray-600 text-sm">
              Industrial materials, pipes, valves, and construction supplies across KSA
            </p>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Ascend Arabia Construction Company in Saudi Arabia?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Services in Al Khobar & KSA:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  Construction Company in Al Khobar
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  Equipment Rental in Khobar
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  Manpower Services Al Khobar
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  Material Trading Saudi Arabia
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  Construction Services Dammam
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas We Serve:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-2" />
                  Al Khobar Construction Company
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-2" />
                  Dammam Construction Services
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-2" />
                  Eastern Province Construction
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-2" />
                  Saudi Arabia Construction Company
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500 mr-2" />
                  KSA Industrial Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
