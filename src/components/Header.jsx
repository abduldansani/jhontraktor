import { useState } from "react";
import Logo from "./Logo";

import MobileMenu from "./MobileMenu";
import { chevron_d, close, menu, world } from "../assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="z-10 sticky top-0 h-20 md:h-[100px] bg-secondary flex items-center justify-center">
        <div className="container mx-auto px-4 flex justify-between items-center text-size-16 lg:text-size-18 xl:text-size-24 font-medium">
          <Logo size="large" colored={true} />
          <nav className="hidden md:flex gap-2 lg:gap-4 xl:gap-6">
            {navLinks.map((link, i) => (
              <a key={i} href="#" className="hover:text-primary">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex lg:gap-4 items-center">
              <img
                src={world}
                alt="-"
                className="hidden xl:block size-[35px]"
              />
              <div className="hidden xl:block">English</div>
              <div className="xl:hidden max-lg:text-sm">EN</div>
              <img src={chevron_d} alt="" className="size-6 lg:size-[30px]" />
            </div>
            <button className="py-3 px-4 lg:py-4 lg:px-8 bg-primary hover:bg-primaryLight rounded-2xl">
              Contact Us
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? close : menu} alt="" className="size-10" />
          </button>
        </div>
      </header>
      {menuOpen && <MobileMenu />}
    </>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];
export default Header;
