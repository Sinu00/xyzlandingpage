import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ManpowerPage() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4 min-h-screen">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Manpower</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Providing skilled and experienced workforce solutions to meet your project requirements on time and on budget.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Manpower Services</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-800">
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Skilled Labor Supply</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Technical Staff</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Project Management Teams</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Safety Officers</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Administrative Support</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">On-site Workforce Solutions</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
} 