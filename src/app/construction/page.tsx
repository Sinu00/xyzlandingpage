import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ConstructionPage() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4 min-h-screen">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-amber-600">Construction</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Delivering expert construction services for industrial, commercial, and infrastructure projects with a focus on quality, safety, and efficiency.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Construction Services</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-800">
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Industrial Construction</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Commercial Construction</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Infrastructure Projects</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Project Management</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Quality Assurance</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Safety Compliance</li>
          </ul>
        </section>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p><strong>Head Office:</strong> King Khalid St. 11th cross, Kingdom of Saudi Arabia, Alkhobar</p>
          <p><strong>Contact:</strong> Tel: +966 13 8943660 | Fax: +966 13 8947740 | Mobile: +966 548613433</p>
          <p><strong>Email:</strong> <a href="mailto:sales@ssqindus.com" className="underline">sales@ssqindus.com</a>, <a href="mailto:info@ssqindus.com" className="underline">info@ssqindus.com</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 