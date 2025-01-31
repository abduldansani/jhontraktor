import { arrow_rc, hero_img } from "../assets";

const Hero = () => {
  return (
    <section
      className="flex items-center bg-secondary bg-cover bg-center bg-no-repeat pb-36 pt-10 sm:bg-top md:pt-24 lg:bg-right"
      style={{ backgroundImage: `url(${hero_img})` }}
    >
      <div className="container mx-auto flex flex-col gap-10 px-4 lg:gap-16">
        <h1 className="text-size-48 font-semibold leading-tight lg:text-size-64 lg:leading-snug">
          We Prepare <br className="max-md:hidden" />
          For The <span className="text-primary">Future</span>
        </h1>
        <p className="text-size-18 font-medium lg:text-size-20">
          We provide the best architectural design, contruction, and <br />
          building maintance services for you.
        </p>
        <div className="flex gap-4 md:gap-6">
          <button className="flex items-center justify-center gap-1 rounded-[15px] bg-primary px-4 py-2 hover:bg-primaryLight max-md:w-full md:gap-2.5 md:px-[30px] md:py-[15px]">
            <div className="text-sm font-medium md:text-base lg:text-size-24">
              Our Services
            </div>
            <img src={arrow_rc} alt="" className="h-[25px] w-[25px]" />
          </button>
          <button className="rounded-[15px] bg-white px-4 py-2 text-sm font-medium text-black hover:bg-orange-100 max-md:w-full md:px-[30px] md:py-[15px] md:text-base lg:text-size-24">
            View Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
