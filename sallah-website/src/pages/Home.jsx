import HeroSection from "../sections/HeroSection/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Departments from "./Departments";
import Gallery from "./Gallery";
import Programs from "./Programs";
import Resources from "./Resources";
import "./Pages.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Departments />
      <Programs />
      <Resources />
      <Gallery />
      <Contact />
    </main>
  );
}
