import { useEffect, useState } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { cn } from "../../utils";
import useWorkTypeContext from "../../context/useWorkTypeContext";

type ProjectCardCarouselPropsType = {
  projects: Project[];
};
const ProjectCardCarousel = ({ projects }: ProjectCardCarouselPropsType) => {
  const { workType } = useWorkTypeContext();
  const [displayIndex, setDisplayIndex] = useState(0);
  const [displayProjects, setDisplayProjects] = useState(projects);

  useEffect(() => {
    filterProjectsNotMatchingSelectedWorkType();
    setDisplayIndex(0);
  }, [workType, projects]);

  const filterProjectsNotMatchingSelectedWorkType = () => {
    setDisplayProjects(projects);

    if (workType === "All") {
      return;
    }

    setDisplayProjects((displayProjects) => {
      return displayProjects.filter(
        (project) => project.types && project.types.includes(workType),
      );
    });
  };

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
    if (newIndex > displayProjects.length - 1 || newIndex < 0) {
      return;
    } else {
      setDisplayIndex(newIndex);
    }
  };

  return (
    <section className="relative -m-52 flex h-[850px] w-[100dvh] scale-50 items-center justify-center md:m-0 md:scale-100">
      {displayProjects.map((project: Project, index: number) => (
        <ProjectCard
          key={project.name + index}
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
