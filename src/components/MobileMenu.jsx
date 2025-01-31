import { chevron_d_black, world_black } from "../assets";
const MobileMenu = () => {
  return (
    <div className="fixed top-[84px] z-50 w-screen md:hidden">
      <div className="container mx-auto flex justify-end px-2">
        <div className="right-2 z-10 w-fit rounded-[15px] bg-white p-6 font-medium text-black shadow-xl">
          <div className="mb-6 flex items-center gap-2">
            <img src={world_black} alt="" className="h-[25px] w-[25px]" />
            <div className="">EngLish</div>
            <button>
              <img src={chevron_d_black} alt="" className="size-[25px]" />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a key={i} href="#">
                {link}
              </a>
            ))}
          </nav>
          <button className="mt-6 rounded-2xl bg-primary px-6 py-3 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const navLinks = ["Home", "About US", "Service", "Project"];

export default MobileMenu;
