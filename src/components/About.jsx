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
      <div className="container mx-auto flex flex-col gap-28 px-2 xl:px-10">
        <div className="flex flex-col-reverse items-end justify-between md:-translate-y-1/2 md:flex-row md:gap-10">
          <div className="-mt-16 flex w-full justify-between gap-4 md:w-fit md:gap-8">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="text-size-34 font-semibold text-primary xl:text-size-48">
                  {item.numbers}
                </div>
                <div className="flex flex-col items-center text-size-16 font-medium sm:ml-2 sm:items-start md:ml-0 md:items-center lg:ml-4 lg:items-start">
                  <p className="text-nowrap">{item.line1}</p>
                  <p className="text-nowrap">{item.line2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full -translate-y-1/2 rounded-[15px] bg-primary p-6 md:translate-y-0 xl:p-12">
            {assuarance.map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 xl:p-2.5">
                <img src={check_c} alt="" className="h-5 w-5" />
                <p className="text-size-16 font-medium 2xl:text-size-20">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="-mt-10 flex flex-col-reverse gap-10 md:-mt-32 lg:flex-row lg:gap-4 xl:gap-32">
          <img src={about_img} alt="" className="shrink-0" />
          <div className="space-y-4 pb-20">
            <div className="text-size-48 font-semibold leading-tight lg:text-size-64 lg:leading-snug">
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
            <div className="font-comforter text-size-48 lg:text-size-64">
              jhon lbf
            </div>
            <div className="text-size-14 font-medium">
              Henry Kurnia Adhi - Founder
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
