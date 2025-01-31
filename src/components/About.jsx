import { about_img, check_c } from "../assets";
import { assuarance, stats } from "../constants/about";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-secondary"
    >
      <div className="container mx-auto px-2 xl:px-10 flex flex-col gap-28">
        <div className="flex justify-between md:gap-10 items-end md:-translate-y-1/2 flex-col-reverse md:flex-row">
          <div className="gap-4 md:gap-8 -mt-16 flex justify-between w-full md:w-fit">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex items-center flex-col sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="text-size-34 xl:text-size-48 font-semibold text-primary">
                  {item.numbers}
                </div>
                <div className="flex flex-col items-center sm:items-start md:items-center lg:items-start sm:ml-2 md:ml-0 lg:ml-4 font-medium text-size-16">
                  <p className="text-nowrap">{item.line1}</p>
                  <p className="text-nowrap">{item.line2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="-translate-y-1/2 md:translate-y-0 w-full p-6 xl:p-12 rounded-[15px] bg-primary">
            {assuarance.map((item, i) => (
              <div key={i} className="flex gap-2 items-center p-1.5 xl:p-2.5">
                <img src={check_c} alt="" className="w-5 h-5" />
                <p className="text-size-16 2xl:text-size-20 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-4 xl:gap-32 -mt-10 md:-mt-32">
          <img src={about_img} alt="" className="shrink-0" />
          <div className="space-y-4 pb-20">
            <div className="text-size-48 lg:text-size-64 font-semibold leading-tight lg:leading-snug">
              <span className="text-primary">25 years</span>{" "}
              <br className="max-xl:hidden" />
              of experience!
            </div>
            <p className="text-size-16 md:text-size-20">
              We have a team of experienced professionals who have been in the
              industry for over 25 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
            </p>
            <p className="text-size-16 md:text-size-20">
              With 25 years of experience, our contractors have a deep
              understanding of industry standards and regulations. We ensure
              that all our projects comply with the latest safety and building
              codes, and that the final product meets or exceeds our client's
              expectations.
            </p>
            <div className="text-size-48 lg:text-size-64 font-comforter">
              jhon lbf
            </div>
            <div className="font-medium text-size-14">
              Henry Kurnia Adhi - Founder
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
