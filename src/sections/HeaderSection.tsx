import React, { useEffect, useMemo, useState } from "react";
import Nav from "../components/Nav";
import { navLinks } from "../data/navLinks";
import { FaBookOpenReader, FaBook  } from "react-icons/fa6";
import { logo } from "../assets/images";


type Props = {
  onOpenModal: () => void;
};

const HeaderSection = ({ onOpenModal }: Props) => {
  const [scrolled, setScrolled] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const offset = useMemo(() => {
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--header-h")
      .trim();
    const n = parseInt(v || "80", 10);
    return -Math.abs(Number.isFinite(n) ? n : 80);
  }, []);

  return (
    <header
      className={["fixed top-0 left-0 w-full z-40 transition-[background,box-shadow] h-[var(--header-h)]",
        scrolled
        ? "bg-[var(--color-cultured)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
        : "",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="block w-[89px]" aria-label="Logo">
          <img src={logo} alt="Eduland logo" />
        </a>
        {/*desctop menu */}
        <Nav 
          links={navLinks} 
          offset={offset} 
          onOpenModal={onOpenModal} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        />
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="md:hidden text-[28px] text-[var(--color-mango-tango)]"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? <FaBookOpenReader /> : <FaBook />}
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
