import { useState } from "react";
import { arrow_rc, chevron_d } from "../assets";
import { categoryLinks, projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import Steps from "./Steps";

const FeaturedProjects = () => {
  const [filter, setFilter] = useState("All Works");
  const displayedProjects =
    filter === "All Works"
      ? projects
      : projects.filter((project) => project.category.includes(filter));
  return (
    <section className="bg-primary pt-12 pb-24">
      <div className="container mx-auto px-4">
        <Steps />
        <div className="mt-16 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-10">
          <div className="text-size-34 md:text-size-48 2xl:text-size-64 font-semibold text-black text-nowrap">
            Featured Projects
          </div>
          <div className="flex items-center gap-4 xl:gap-6 overflow-x-scroll no-scrollbar">
            {categoryLinks.map((category, i) => (
              <div
                key={i}
                onClick={() => setFilter(category)}
                className={`text-size-16 xl:text-size-20 font-semibold cursor-pointer text-nowrap ${
                  category === filter
                    ? "text-secondary border-b-4 border-secondary pb-2"
                    : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 lg:mt-12 flex gap-4 overflow-x-scroll no-scrollbar">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex gap-2.5 items-center justify-end mt-6 cursor-not-allowed">
          <p className="tex-size-20 font-semibold text-black">
            Explore All Projects
          </p>
          <img src={arrow_rc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
