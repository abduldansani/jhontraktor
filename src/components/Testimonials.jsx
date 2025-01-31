import { useState } from "react";
import { testimonials } from "../constants/testimonials";
import { chevron_l, chevron_r } from "../assets";

import { motion } from "motion/react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };
  const handleNext = () => {
    if (current === testimonials.length - 1) return;
    setCurrent(current + 1);
  };

  const disablePrev = current === 0;
  const disableNext = current === testimonials.length - 1;

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-secondary py-10"
    >
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 2xl:px-10">
        <div className="text-size-24 font-semibold text-primary sm:text-size-28">
          What Our Client Says
        </div>
        <div className="flex max-w-6xl flex-col items-center gap-2 text-center md:gap-4">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center gap-10"
            >
              {current === i && (
                <div className="">
                  <p className="text-size-16 md:text-size-20">
                    {testimonial.review}
                  </p>
                  <p className="text-size-16 font-medium md:text-size-20">
                    {testimonial.name}
                  </p>
                  <p className="text-size-14 font-medium md:text-size-16">
                    {testimonial.designation}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handlePrev}
              disabled={disablePrev}
              className={`flex h-fit items-center gap-2 md:gap-4 ${
                disablePrev && "cursor-not-allowed opacity-50"
              }`}
            >
              <img src={chevron_l} alt="" className="h-5 w-5" />
              <div className="text-size-14 font-medium md:text-size-16">
                Prev
              </div>
            </button>
            <div className="flex items-center gap-4 md:gap-10">
              {testimonials.map((testimonial, i) =>
                current === i ? (
                  <div
                    key={testimonial.id}
                    className="order-0 flex h-20 w-20 items-center justify-center rounded-full bg-primary md:h-[90px] md:w-[90px]"
                  >
                    <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-secondary md:h-[80px] md:w-[80px]">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="h-16 w-16 md:h-[70px] md:w-[70px]"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    key={testimonial.id}
                    src={testimonial.image}
                    alt=""
                    className={`h-10 w-10 shrink-0 md:h-[50px] md:w-[50px] ${
                      current === 0 && i === testimonials.length - 1
                        ? `-order-1`
                        : i === current - 1
                          ? "-order-1"
                          : `order-1`
                    }`}
                  />
                ),
              )}
            </div>
            <button
              onClick={handleNext}
              disabled={disableNext}
              className={`flex h-fit items-center gap-2 md:gap-4 ${
                disableNext && "cursor-not-allowed opacity-50"
              }`}
            >
              <div className="text-size-14 font-medium md:text-size-16">
                Next
              </div>
              <img src={chevron_r} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
