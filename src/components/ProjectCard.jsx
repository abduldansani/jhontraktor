const ProjectCard = ({ project }) => {
  return (
    <div
      className="h-[392px] w-[310px] shrink-0 rounded-[15px] md:h-[390px] md:w-[338px] xl:h-[490.4px] xl:w-[388.2px]"
      style={{ backgroundImage: `url(${project.img})` }}
    >
      <div className="to-[rgba(0,0,0, 0.5)] flex h-full w-full flex-col justify-end rounded-[15px] bg-gradient-to-t from-black to-50% pb-6 text-center">
        <p className="text-size-24 font-medium">{project.title}</p>
        <p className="text-size-20 font-medium">
          {project.category.join(" & ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
