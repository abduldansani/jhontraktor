const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-[310px] md:w-[338px] xl:w-[485px] h-[392px] md:h-[390px] xl:h-[613px] shrink-0"
      style={{ backgroundImage: `url(${project.img})` }}
    >
      <div className="h-full w-full bg-gradient-to-t from-black to-[rgba(0,0,0, 0.5)] to-50% flex pb-2 flex-col justify-end text-center">
        <p className="font-medium text-size-24">{project.title}</p>
        <p className="font-medium text-size-20">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
