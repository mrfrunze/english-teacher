import { Link } from "react-scroll";
import type { NavItem } from "../data/navLinks";

type Props = {
  links: readonly NavItem[];
  offset?: number;
  isOpen: boolean;
  onClose: () => void;
};

const Nav = ({ links, offset = -80, isOpen, onClose }: Props) => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-6 flex-1">
        <ul className="flex flex-1 items-center justify-center gap-6">
          {links.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={400}
                offset={offset}
                activeClass="text-[var(--color-mango-tango)]"
                className="cursor-pointer font-medium text-[var(--color-rich-black-fogra-29)] hover:opacity-80"
                style={{ fontFamily: "var(--font-dm-sans)", fontSize: "18px" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-secondary"
        >
          Get Started
        </button>
      </nav>
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed top-[var(--header-h)] inset-x-0 z-30 bg-[var(--color-white)] border-t border-black/10"
          aria-hidden={!isOpen}
        >
          <ul className="flex flex-col items-center gap-3 py-4">
            {links.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy
                  smooth
                  duration={400}
                  offset={offset}
                  className="block py-2 px-4 font-medium leading-none text-[var(--color-rich-black-fogra-29)] hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "18px",
                  }}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 w-[190px] m-auto mt-0 mb-0">
            <button
              type="button"
              className="btn btn-secondary "
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
