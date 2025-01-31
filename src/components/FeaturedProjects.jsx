import { useState } from "react";
import { arrow_rc, chevron_d } from "../assets";
import { categoryLinks, projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import Steps from "./Steps";

import { motion } from "motion/react";

const FeaturedProjects = () => {
  const [filter, setFilter] = useState("All Works");
  const displayedProjects =
    filter === "All Works"
      ? projects
      : projects.filter((project) => project.category.includes(filter));
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-primary pb-24 pt-12"
    >
      <div className="container mx-auto px-4">
        <Steps />
        <div className="mt-16 flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-10">
          <div className="text-nowrap text-size-34 font-semibold text-black md:text-size-48 2xl:text-size-64">
            Featured Projects
          </div>
          <div className="flex items-center gap-4 overflow-x-scroll no-scrollbar xl:gap-6">
            {categoryLinks.map((category, i) => (
              <div
                key={i}
                onClick={() => setFilter(category)}
                className={`cursor-pointer text-nowrap text-size-16 font-semibold xl:text-size-20 ${
                  category === filter
                    ? "border-b-4 border-secondary pb-2 text-secondary"
                    : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-scroll no-scrollbar lg:mt-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-6 flex cursor-not-allowed items-center justify-end gap-2.5">
          <p className="tex-size-20 font-semibold text-black">
            Explore All Projects
          </p>
          <img src={arrow_rc} alt="" />
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
