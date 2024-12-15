import { useState } from "react";
import Logo from "./Logo";

import world from "../assets/icons/world.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import chevron_down from "../assets/icons/chevron-down.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="z-10 sticky top-0 h-[100px] xl:h-[140px] bg-secondary flex items-center justify-center">
        <div className="container mx-auto px-2 xl:px-10 flex justify-between items-center text-size-16 lg:text-size-18 xl:text-size-24 font-medium">
          <Logo size="large" colored={true} />
          <nav className="hidden md:flex gap-2 lg:gap-4 xl:gap-6">
            {navLinks.map((link, i) => (
              <a key={i} href="#">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex lg:gap-4 items-center">
              <img
                src={world}
                alt=""
                className="hidden xl:block h-[35px] w-[35px]"
              />
              <div className="hidden xl:block">English</div>
              <div className="xl:hidden">EN</div>
              <img src={chevron_down} alt="" className="w-[30px] h-[30px]" />
            </div>
            <button className="py-3 px-6 lg:py-4 lg:px-8 bg-primary rounded-2xl">
              Contact Us
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? close : menu} alt="" className="h-10 w-10" />
          </button>
        </div>
      </header>
      {menuOpen && <MobileMenu />}
    </>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];
export default Header;
