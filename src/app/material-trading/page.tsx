import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MaterialTradingPage() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto py-12 px-4 min-h-screen">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-amber-600">Material Trading</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We supply a comprehensive range of industrial materials for all your project needs, ensuring quality and timely delivery.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Material Categories</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-800">
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Valves</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Pipes and Tubes</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Forged Fittings</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Butt Weld</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Flanges</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Instrumentation Tube Fittings</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Electrical Products</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Insulation</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Safety Items & Welding</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Consumable Items</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Structural Steel</li>
            <li className="bg-gray-50 rounded-lg p-4 shadow-sm">Gasket & Stud Bolts</li>
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