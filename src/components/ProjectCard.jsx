const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-[310px] md:w-[338px] xl:w-[388.2px] xl:h-[490.4px] h-[392px] md:h-[390px] shrink-0 rounded-[15px]"
      style={{ backgroundImage: `url(${project.img})` }}
    >
      <div className="h-full rounded-[15px] w-full bg-gradient-to-t from-black to-[rgba(0,0,0, 0.5)] to-50% flex pb-6 flex-col justify-end text-center ">
        <p className="font-medium text-size-24">{project.title}</p>
        <p className="font-medium text-size-20">
          {project.category.join(" & ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
