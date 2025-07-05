import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Clients from "@/components/clients"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      {/* Main Content Sections with improved spacing */}
      <main className="space-y-0">
        <About />
        <Services />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}
