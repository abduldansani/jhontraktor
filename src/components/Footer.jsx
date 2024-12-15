import arrow_right from "../assets/icons/arrow-right.svg";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="bg-secondary pt-10 pb-4">
      <footer className="container mx-auto px-2 xl:px-10 space-y-7">
        <div className="flex gap-4 flex-col md:flex-row justify-between">
          <Logo />
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-size-16 sm:text-size-20">
              Subscribe To Our Newslatter :
            </p>
            <div className="border-b-2 flex h-fit items-center gap-2 w-fit">
              <input
                type="email"
                placeholder="Enter your email addres"
                className="focus:outline-none bg-transparent text-size-16 p-1"
              />
              <img src={arrow_right} alt="" className="w-[15px] h-[15px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col gap-8 md:flex-row">
          <div className="space-y-3 md:w-1/3">
            <p className="text-size-20 font-medium">About Us</p>
            <p className="text-size-16">
              We have the confidence to provide the best service for you, with
              the support of Professional and Certified HR that we currently
              have and the high-quality materials we use and structured work
              techniques, we will be able to realize timely completion of work.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-size-20 font-medium">Office</p>
            <p className="text-size-16">
              18 Office Park Building 21th Floor Unit C.
            </p>
            <p className="text-size-16">
              Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520
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
          <div className="space-y-3">
            <p className="text-size-20 font-medium">Link</p>
            <nav className="flex flex-col gap-2 text-size-16">
              {navLinks.map((link, i) => (
                <a href="#" className="">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
      <p className="mt-10 opacity-50 text-[12px] text-center">
        Copyright © 2023{" "}
        <a href="https://www.figma.com/@brainstewstudio">CandyAP.</a> All Rights
        Reserved
      </p>
    </section>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];
export default Footer;
