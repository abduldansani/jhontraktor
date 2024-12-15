import world from "../assets/icons/world_black.svg";
import chevron_down from "../assets/icons/chevron_down_black.svg";
const MobileMenu = () => {
  return (
    <div className="md:hidden fixed top-[100px] z-50 w-screen">
      <div className=" flex justify-end container mx-auto px-2">
        <div className="w-fit p-6 bg-white text-black z-10 right-2 rounded-[15px] font-medium shadow-lg">
          <div className="flex gap-2 items-center mb-6">
            <img src={world} alt="" className=" h-[25px] w-[25px]" />
            <div className="">English</div>
            <img src={chevron_down} alt="" className="w-[25px] h-[25px]" />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a key={i} href="#">
                {link}
              </a>
            ))}
          </nav>
          <button className="py-3 px-6 bg-primary rounded-2xl text-white mt-6">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];

export default MobileMenu;
