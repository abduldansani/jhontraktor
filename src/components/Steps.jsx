import { steps } from "../constants/projects";

const Steps = () => {
  return (
    <div className="flex flex-row-reverse md:flex-col pl-10 md:px-0">
      <div className="flex flex-col md:flex-row justify-around relative flex-1 -left-[17.5px] md:left-0 gap-10 md:-bottom-[17.5px]">
        {steps.map((step) => (
          <div
            key={step.step}
            className="flex flex-row-reverse md:flex-col items-center text-center gap-3 justify-end"
          >
            <div className="flex flex-1 flex-col gap-3">
              <div className="space-y-2">
                <p className="font-medium sm:text-size-20 md:text-size-16 xl:text-size-20">
                  {step.descLine1} <br className="md:max-lg:hidden" />{" "}
                  {step.descLine2}
                </p>
              </div>
              <p className="font-medium text-size-14">Step {step.step}</p>
            </div>
            <div className="w-[35px] h-[35px] bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="bg-white w-[19px] h-[19px] rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="shrink-0 w-0.5 md:w-full md:h-0.5 bg-white" />
    </div>
  );
};

export default Steps;
