import hero_img from "../assets/images/hero-img.png";
import arrow_right_circle from "../assets/icons/arrow-right-circle.svg";

const Hero = () => {
  return (
    <div
      className="pt-10 md:pt-24 pb-36 flex items-center bg-no-repeat bg-cover bg-center sm:bg-top lg:bg-right"
      style={{ backgroundImage: `url(${hero_img})` }}
    >
      <div className="container mx-auto px-2 xl:px-10 flex flex-col gap-10 lg:gap-16">
        <div className="text-size-48 lg:text-size-64 font-semibold">
          We Prepare <br className="hidden md:block" />
          For The <span className="text-primary">Future</span>
        </div>
        <p className="font-medium text-size-18 lg:text-size-20">
          We provide the best architectural design, contruction, and <br />
          building maintance services for you.
        </p>
        <div className="flex gap-4 md:gap-6">
          <button className="flex gap-1 md:gap-2.5 items-center py-2 px-4 md:py-[15px] md:px-[30px] bg-primary rounded-[15px]">
            <div className="text-size-16 md:text-size-24 font-medium">
              Our Services
            </div>
            <img
              src={arrow_right_circle}
              alt=""
              className="w-[25px] h-[25px] "
            />
          </button>
          <button className=" py-[15px] px-[30px] bg-white text-black rounded-[15px] text-size-16 md:text-size-24 font-medium">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
