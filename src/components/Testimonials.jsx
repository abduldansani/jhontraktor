import { useState } from "react";
import reviewer_1 from "../assets/images/reviewer-1.png";
import reviewer_2 from "../assets/images/reviewer-2.png";
import reviewer_3 from "../assets/images/reviewer-3.png";
import chevron_left from "../assets/icons/chevron-left.svg";
import chevron_right from "../assets/icons/chevron-right.svg";
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
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-4 2xl:px-10 flex flex-col gap-10 items-center">
        <div className="text-size-24 sm:text-size-28 font-semibold text-primary">
          What Our Client Says
        </div>
        <div className="max-w-6xl text-center flex flex-col items-center gap-2 md:gap-4">
          {testimonials.map((testimonial, i) => (
            <div className="flex flex-col items-center gap-10">
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
              <img src={chevron_left} alt="" className="h-5 w-5" />
              <div className="text-size-14 md:text-size-16 font-medium">
                Prev
              </div>
            </button>
            <div className="flex gap-4 md:gap-10 items-center">
              {testimonials.map((testimonial, i) =>
                current === i ? (
                  <div className="w-20 h-20 md:w-[90px] md:h-[90px] bg-primary rounded-full flex items-center justify-center order-0">
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
              <img src={chevron_right} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Tom DeLonge",
    designation: "CEO, Lexmark",
    review:
      "I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.",
    image: reviewer_1,
  },
  {
    name: "Sara Mitchell",
    designation: "Managing Director, BuildRight",
    review:
      "The team went above and beyond our expectations. They completed the project ahead of schedule and maintained top-notch quality throughout. Highly professional and reliable services!",
    image: reviewer_2,
  },
  {
    name: "James Carter",
    designation: "Founder, Carter Real Estate",
    review:
      "Working with this company has been a great experience. Their attention to detail, timely delivery, and reasonable pricing make them stand out. I would not hesitate to recommend them to others.",
    image: reviewer_3,
  },
];

export default Testimonials;
