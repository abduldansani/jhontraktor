import { arrow_r } from "../assets";
import { social } from "../constants/social";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="bg-secondary pb-4 pt-10">
      <footer className="container mx-auto space-y-7 px-4">
        <div className="flex justify-between gap-4 max-lg:flex-col">
          <Logo />
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <p className="text-size-16 sm:text-size-20">
              Subscribe To Our Newslatter :
            </p>
            <div className="flex h-fit w-fit items-center gap-2 border-b-2">
              <input
                type="email"
                placeholder="Enter your email addres"
                className="bg-transparent p-1 text-size-16 focus:outline-none"
              />
              <img src={arrow_r} alt="" className="h-[15px] w-[15px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="space-y-3 md:w-1/2 lg:w-1/3">
            <p className="text-size-20 font-medium">About Us</p>
            <p className="text-size-16">
              We have the confidence to provide the best service for you, with
              the support of Professional and Certified HR that we currently
              have and the high-quality materials we use and structured work
              techniques, we will be able to realize timely completion of work.
            </p>
            <div className="flex items-center gap-4">
              {social.map((social) => (
                <a key={social.id} href={social.link} target="_blank">
                  <img src={social.img} alt="-" width={30} height={30} />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-size-20 font-medium">Office</p>
            <p className="text-size-16">
              18 Office Park Building 21th Floor Unit C.
            </p>
            <p className="text-size-16">
              Jl. TB Simatupang Kav. 18, <br /> Jakarta Selatan ,12520
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-size-20 font-medium">Contact</p>
            <div className="flex gap-2 text-size-16">
              <p>Call Us:</p>
              <a href="tel:(+62) 877-2469-7246">(+62) 877-2469-7246</a>
            </div>
            <div className="flex gap-2 text-size-16">
              <p>Email:</p>
              <a href="mailto:contact@jhontraktor.co">contact@jhontraktor.co</a>
            </div>
          </div>
          <div className="space-y-3 max-lg:hidden">
            <p className="text-size-20 font-medium">Link</p>
            <nav className="flex flex-col gap-2 text-size-16">
              {navLinks.map((link, i) => (
                <a key={i} href="#" className="">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
      <p className="mt-10 text-center text-[12px] opacity-50">
        Copyright © 2023{" "}
        <a href="https://www.figma.com/@brainstewstudio" target="_blank">
          CandyAP.
        </a>{" "}
        All Rights Reserved
      </p>
    </section>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];
export default Footer;
