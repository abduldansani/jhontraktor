import { check_c, chevron_d, chevron_d_gray, contact_img } from "../assets";

import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-secondary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contact_img})` }}
    >
      <div className="to-[rgba(0,0,0, 0%)] bg-gradient-to-b from-[#191A19] py-8">
        <div className="container mx-auto space-y-8 px-2 xl:px-10">
          <div className="text-center text-size-40 font-semibold sm:text-size-48 md:text-size-64">
            Leading Way In Building & Civil Construction
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <img src={check_c} alt="" />
                <p className="text-size-14 font-medium sm:text-size-16 md:text-size-24">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-10 max-lg:flex-col md:max-xl:gap-6">
            <div className="rounded-2xl bg-primary p-5 md:p-10 lg:w-2/3">
              <p className="mb-4 text-size-24 font-medium md:mb-6">
                Request A Quote
              </p>
              <p className="mb-5 text-size-16 md:text-size-20">
                Complete control over products allow us to our customers the
                best quality prices and services. We take great pride in
                everything that we do in Jhontraktor{" "}
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
                  {inputs.map((input, i) =>
                    input.type === "text" ? (
                      <input
                        key={i}
                        type="text"
                        className="w-full rounded-[15px] px-6 py-4 text-base text-black focus:outline-secondary lg:px-10 lg:py-6 xl:text-size-20"
                        placeholder={input.name}
                      />
                    ) : (
                      <button
                        key={i}
                        className="flex items-center justify-between gap-4 rounded-[15px] bg-white px-6 py-4 lg:px-10 lg:py-6"
                      >
                        <div className="text-nowrap text-base text-secondary opacity-50 xl:text-size-20">
                          Select Your Service
                        </div>
                        <img
                          src={chevron_d_gray}
                          alt=""
                          className="h-[30px] w-[30px]"
                        />
                      </button>
                    ),
                  )}
                  <textarea
                    name=""
                    id=""
                    placeholder="Additional Details!"
                    className="h-36 rounded-[15px] px-6 py-4 text-base text-black focus:outline-secondary sm:col-span-2 lg:col-span-2 lg:px-10 lg:py-6 xl:text-size-20"
                  ></textarea>
                </div>
                <button className="mt-4 w-full rounded-[15px] bg-secondary py-4 text-size-20 lg:mt-6 lg:py-6">
                  Submit Request
                </button>
              </form>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-primary p-5 md:p-10">
              <p className="text-size-24 font-medium">Contact Info</p>
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="text-size-20">Our Location</div>
                  <p className="text-size-16">
                    18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang
                    Kav. 18, Jakarta Selatan ,12520
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-size-20">Quick Contact</div>

                  <div className="">
                    <div className="flex gap-2 text-size-16">
                      <p>Call Us:</p>
                      <a href="tel:(+62) 877-2469-7246">(+62) 877-2469-7246</a>
                    </div>
                    <div className="flex gap-2 text-size-16">
                      <p>Email:</p>
                      <a href="mailto:contact@jhontraktor.co">
                        contact@jhontraktor.co
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-size-20">Opening Hours</div>

                  <div className="">
                    <p className="text-size-16">Monday - Friday</p>
                    <p className="text-size-16">09:00 AM - 06:00 PM</p>
                  </div>
                </div>
                <div className="text-size-20">
                  Do You Have Any Question, Just Contact Us To Get Help!
                </div>
              </div>
              <button className="mt-6 w-full rounded-[15px] bg-secondary py-4 text-size-20 lg:py-6">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const benefits = [
  "Professional Staff",
  "100% Satisfaction",
  "Accurate Testing",
  "Transparent Pricing",
];

const inputs = [
  {
    name: "Name",
    type: "text",
  },
  {
    name: "Email",
    type: "text",
  },
  {
    name: "Phone",
    type: "text",
  },
  {
    name: "Name",
    type: "select",
  },
];

export default Contact;
