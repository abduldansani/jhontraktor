import contact_img from "../assets/images/contact-img.png";
import check_circle from "../assets/icons/check-circle.svg";
import chevron_down from "../assets/icons/chevron_down_gray.svg";

const Contact = () => {
  return (
    <section
      className="bg-secondary"
      style={{ backgroundImage: `url(${contact_img})` }}
    >
      <div className="bg-gradient-to-b from-[#191A19] to-[rgba(0,0,0, 0%)] py-8">
        <div className="container mx-auto px-2 xl:px-10 space-y-8">
          <div className="text-size-40 sm:text-size-48 md:text-size-64 font-semibold text-center">
            Leading Way In Building & Civil Construction
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <img src={check_circle} alt="" />
                <p className="text-size-14 sm:text-size-16 md:text-size-24 font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="md:w-2/3 rounded-2xl bg-primary p-10">
              <p className="text-size-24 mb-6 font-medium">Request A Quote</p>
              <p className="text-size-20 mb-5">
                Complete control over products allow us to our customers the
                best quality prices and services. We take great pride in
                everything that we do in Jhontraktor{" "}
              </p>
              <form>
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
                  {inputs.map((input, i) => (
                    <>
                      {input.type === "text" ? (
                        <input
                          type="text"
                          className="py-4 lg:py-6 px-6 lg:px-10 text-black focus:outline-secondary rounded-[15px] xl:text-size-20 w-full"
                          placeholder={input.name}
                        />
                      ) : (
                        <div className="py-4 lg:py-6 px-6 lg:px-10 flex justify-between gap-4 items-center rounded-[15px] bg-white">
                          <div className="text-secondary opacity-50 xl:text-size-20">
                            Select Your Service
                          </div>
                          <img
                            src={chevron_down}
                            alt=""
                            className="w-[30px] h-[30px]"
                          />
                        </div>
                        // <div className="py-6 px-10 text-black focus:outline-secondary rounded-[15px] bg-white"></div>
                      )}
                    </>
                  ))}
                  <textarea
                    name=""
                    id=""
                    placeholder="Additional Details!"
                    className="py-6 px-10 h-36 text-black focus:outline-secondary rounded-[15px] sm:col-span-2  md:col-span-1 lg:col-span-2 xl:text-size-20"
                  ></textarea>
                </div>
                <button className="bg-secondary py-4 lg:py-6 text-size-20 rounded-[15px] mt-4 lg:mt-6 w-full">
                  Submit Request
                </button>
              </form>
            </div>
            <div className="p-10 rounded-2xl bg-primary flex-1 flex flex-col justify-between">
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
              <button className="bg-secondary py-4 lg:py-6 text-size-20 rounded-[15px] mt-6 w-full">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
