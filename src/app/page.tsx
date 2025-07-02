import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
