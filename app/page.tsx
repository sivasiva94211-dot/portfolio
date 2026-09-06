import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfessionalSummary />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ProfessionalSkills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
