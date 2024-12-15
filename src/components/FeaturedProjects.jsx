import project_1 from "../assets/images/project-1.png";
import project_2 from "../assets/images/project-2.png";
import project_3 from "../assets/images/project-3.png";
import project_4 from "../assets/images/project-4.png";
import project_5 from "../assets/images/project-5.png";
import project_6 from "../assets/images/project-6.png";
import project_7 from "../assets/images/project-7.png";
import project_8 from "../assets/images/project-8.png";
import arrow_right_circle from "../assets/icons/arrow-right-circle-black.svg";
import chevron_down from "../assets/icons/chevron-down.svg";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="bg-primary pt-12 pb-24">
      <div className="container mx-auto px-2 xl:px-10">
        <div className="flex flex-row-reverse md:flex-col pl-10 md:px-0">
          <div className="flex flex-col md:flex-row justify-around relative flex-1 -left-[17.5px] md:left-0 gap-10 md:-bottom-[17.5px]">
            {steps.map((step, i) => (
              <div className="flex flex-row-reverse md:flex-col items-center text-center gap-3 justify-end">
                <div className="flex flex-1 flex-col gap-3">
                  <div className="space-y-2">
                    <p className="font-medium text-size-20">
                      {step.descLine1} <br className="" /> {step.descLine2}
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
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-size-40 md:text-size-48 2xl:text-size-64 font-semibold text-black">
            Featured Project
          </div>
          <div className="hidden lg:flex items-center gap-2 lg:gap-4 2xl:gap-6">
            {categoryLinks.map((category, i) => (
              <div className="text-size-16 xl:text-size-20 font-semibold">
                {category}
              </div>
            ))}
          </div>
          <div className="flex lg:hidden gap-4 items-center py-2 px-6 rounded-[15px] w-fit bg-secondary">
            <div className="xl:hidden">All</div>
            <img src={chevron_down} alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="mt-4 lg:mt-12 flex gap-4 overflow-hidden">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
        <div className="flex gap-2.5 items-center justify-end mt-6">
          <p className="tex-size-20 font-semibold text-black">
            Explore All Projects
          </p>
          <img src={arrow_right_circle} alt="" />
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    step: 1,
    descLine1: "Evaluation And Signing",
    descLine2: "Of The Contract",
  },
  {
    step: 2,
    descLine1: "Preparation Of The",
    descLine2: "Work Plan",
  },
  {
    step: 3,
    descLine1: "Implementation Of",
    descLine2: "Quality Works",
  },
  {
    step: 4,
    descLine1: "Delivering The Project",
    descLine2: "To The Customer",
  },
];

const categoryLinks = [
  "All Works",
  "Construction",
  "Architecture",
  "Building",
  "Renovations",
  "Interior",
];

const projects = [
  {
    title: "Skyskuy Tower",
    category: "Renovation & Architecture",
    img: project_1,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_2,
  },
  {
    title: "The Orange Apartemen",
    category: "Construction & Interior",
    img: project_3,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_4,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_5,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_6,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_7,
  },
  {
    title: "The Fallingwater House",
    category: "Building & Interior",
    img: project_8,
  },
];

export default FeaturedProjects;
