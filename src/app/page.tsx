import Navbar from "@/app/components/Navbar"
import { Hero } from "@/app/components/hero"
import About from "@/app/components/About"
import Services  from "@/app/components/Services"
import Contact from "@/app/components/Contact"
import Footer from "./components/Footer"
   

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
