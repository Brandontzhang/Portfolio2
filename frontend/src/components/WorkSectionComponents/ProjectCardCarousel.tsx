import { useState } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { cn } from "../../utils";

type ProjectCardCarouselPropsType = {
  projects: Project[];
};
const ProjectCardCarousel = ({ projects }: ProjectCardCarouselPropsType) => {
  const center = Math.floor(projects.length / 2);
  const [displayIndex, setDisplayIndex] = useState(center);

  const getScale = (index: number) => {
    const distance = displayIndex - index;
    if (distance == 0) {
      return "z-50";
    } else if (distance == 1) {
      return "scale-75 -translate-x-[400px] z-40";
    } else if (distance == -1) {
      return "scale-75 translate-x-[400px] z-40";
    } else if (distance == 2) {
      return "scale-50 -translate-x-[700px] z-30";
    } else if (distance == -2) {
      return "scale-50 translate-x-[700px] z-30";
    } else if (distance > 2) {
      return "opacity-0 scale-0 -translate-x-[1000px]";
    } else if (distance < -2) {
      return "opacity-0 scale-0 translate-x-[1000px]";
    }
  };

  const shiftDisplayIndex = (amount: number) => {
    const newIndex = displayIndex + amount;
    if (newIndex > projects.length - 1 || newIndex < 0) {
      return;
    } else {
      setDisplayIndex(newIndex);
    }
  };

  return (
    <section className="relative -m-52 md:m-0 flex h-[850px] w-[100dvh] items-center justify-center scale-50 md:scale-100">
      {projects.map((project: Project, index: number) => (
        <ProjectCard
          className={cn(
            getScale(index),
            "absolute transition-all duration-1000 ease-in-out",
          )}
          project={project}
        />
      ))}
      <div className="absolute bottom-0 text-4xl">
        <button
          className="z-50 px-4 text-5xl"
          onClick={() => shiftDisplayIndex(-1)}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="z-50 px-4 text-5xl"
          onClick={() => shiftDisplayIndex(+1)}
        >
          <AiOutlineRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectCardCarousel;
