import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Leadership from "./components/Leadership";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Leadership />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
