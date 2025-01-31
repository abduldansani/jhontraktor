import { steps } from "../constants/projects";

const Steps = () => {
  return (
    <div className="flex flex-row-reverse pl-10 md:flex-col md:px-0">
      <div className="relative -left-[17.5px] flex flex-1 flex-col justify-around gap-10 md:-bottom-[17.5px] md:left-0 md:flex-row">
        {steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-row-reverse items-center justify-end gap-3 text-center md:flex-col"
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="space-y-2">
                <p className="font-medium sm:text-size-20 md:text-size-16 xl:text-size-20">
                  {step.descLine1} <br className="md:max-lg:hidden" />{" "}
                  {step.descLine2}
                </p>
              </div>
              <p className="text-size-14 font-medium">Step {step.step}</p>
            </div>
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white bg-opacity-20">
              <div className="h-[19px] w-[19px] rounded-full bg-white"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-0.5 shrink-0 bg-white md:h-0.5 md:w-full" />
    </div>
  );
};

export default Steps;
