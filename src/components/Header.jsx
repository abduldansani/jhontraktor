import { useState } from "react";
import Logo from "./Logo";

import MobileMenu from "./MobileMenu";
import { chevron_d, close, menu, world } from "../assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 flex h-20 items-center justify-center bg-secondary md:h-[100px]">
        <div className="container mx-auto flex items-center justify-between px-4 text-size-16 font-medium lg:text-size-18 xl:text-size-24">
          <Logo size="large" colored={true} />
          <nav className="hidden gap-2 md:flex lg:gap-4 xl:gap-6">
            {navLinks.map((link, i) => (
              <a key={i} href="#" className="hover:text-primary">
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex lg:gap-6">
            <div className="flex items-center lg:gap-4">
              <img
                src={world}
                alt="-"
                className="hidden size-[35px] xl:block"
              />
              <div className="hidden xl:block">English</div>
              <div className="max-lg:text-sm xl:hidden">EN</div>
              <img src={chevron_d} alt="" className="size-6 lg:size-[30px]" />
            </div>
            <button className="rounded-2xl bg-primary px-4 py-3 hover:bg-primaryLight lg:px-8 lg:py-4">
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
