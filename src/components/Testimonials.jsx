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
      className="py-10 bg-secondary"
    >
      <div className="container mx-auto px-4 2xl:px-10 flex flex-col gap-10 items-center">
        <div className="text-size-24 sm:text-size-28 font-semibold text-primary">
          What Our Client Says
        </div>
        <div className="max-w-6xl text-center flex flex-col items-center gap-2 md:gap-4">
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
                  <p className="font-medium text-size-16 md:text-size-20">
                    {testimonial.name}
                  </p>
                  <p className="font-medium text-size-14 md:text-size-16">
                    {testimonial.designation}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-2 md:gap-4 items-center">
            <button
              onClick={handlePrev}
              disabled={disablePrev}
              className={`flex gap-2 md:gap-4 items-center h-fit ${
                disablePrev && "cursor-not-allowed opacity-50"
              }`}
            >
              <img src={chevron_l} alt="" className="h-5 w-5" />
              <div className="text-size-14 md:text-size-16 font-medium">
                Prev
              </div>
            </button>
            <div className="flex gap-4 md:gap-10 items-center">
              {testimonials.map((testimonial, i) =>
                current === i ? (
                  <div
                    key={testimonial.id}
                    className="w-20 h-20 md:w-[90px] md:h-[90px] bg-primary rounded-full flex items-center justify-center order-0"
                  >
                    <div className="w-[75px] h-[75px] md:w-[80px] md:h-[80px] bg-secondary flex items-center justify-center rounded-full">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="h-16 w-16 md:w-[70px] md:h-[70px]"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    key={testimonial.id}
                    src={testimonial.image}
                    alt=""
                    className={`shrink-0 w-10 h-10 md:w-[50px] md:h-[50px] ${
                      current === 0 && i === testimonials.length - 1
                        ? `-order-1`
                        : i === current - 1
                        ? "-order-1"
                        : `order-1`
                    }`}
                  />
                )
              )}
            </div>
            <button
              onClick={handleNext}
              disabled={disableNext}
              className={`flex gap-2 md:gap-4 items-center h-fit ${
                disableNext && "cursor-not-allowed opacity-50"
              }`}
            >
              <div className="text-size-14 md:text-size-16 font-medium">
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
