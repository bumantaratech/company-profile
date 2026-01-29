import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-industrial-graphite font-body">
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
