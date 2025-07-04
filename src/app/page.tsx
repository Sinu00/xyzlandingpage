import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      {/* Main Content Sections with improved spacing */}
      <main className="space-y-0">
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
