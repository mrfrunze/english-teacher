import { useState } from "react";
import Modal from "./components/Modal";
import FooterSection from "./sections/FooterSection";
import HeaderSection from "./sections/HeaderSection";
import Hero from "./sections/Hero";
import About from "./sections/AboutSection";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderSection onOpenModal={() => setOpen(true)}/>
      <main>
        <Hero/>
        <About/>
      </main>
      <FooterSection />
      <Modal open={open} onClose={() => setOpen(false)}>
        {/* modal content */}
      </Modal>
    </>
  );
}

export default App;
