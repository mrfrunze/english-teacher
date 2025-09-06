import FooterSection from "./sections/FooterSection";
import HeaderSection from "./sections/HeaderSection";
import Hero from "./sections/Hero";
import About from "./sections/AboutSection";
import Success from "./sections/SuccessSection"
import Testimonial from "./sections/Testimonial";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <HeaderSection/>
      <main>
        <Hero/>
        <About/>
        <Success />
        <Testimonial/>
        <ContactSection/>
      </main>
      <FooterSection />
    </>
  );
}

export default App;
