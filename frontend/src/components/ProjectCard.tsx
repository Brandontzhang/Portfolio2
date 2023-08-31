import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { urlFor } from "../client";
import { Project } from "../types";
import { useRef, useState } from "react";
import { cn } from "../utils";

type ProjectCardPropsType = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardPropsType) => {
  const { name, desc, imgUrl } = project;
  const [hover, setHover] = useState(false);

  const iconDivRef = useRef<HTMLDivElement>(null);

  const handleMouseLeaveImage = (event: any) => {
    if ( event.relatedTarget === iconDivRef.current || iconDivRef.current?.contains(event.relatedTarget)) {
        setHover(true);
    } else {
        setHover(false);
    }
  };

  return (
    <section className="relative m-4 w-[532px] flex-shrink-0 rounded-xl bg-slate-50">
      <img
        className={cn(
          "aspect-square rounded-full p-8 drop-shadow-lg",
          hover ? "brightness-50" : "",
        )}
        src={urlFor(imgUrl)}
        onMouseLeave={(event) => handleMouseLeaveImage(event)}
        onMouseEnter={() => setHover(true)}
      />
      <div className="px-8">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>{desc}</p>
      </div>

      <div
        ref={iconDivRef}
        className={cn(
          "absolute top-[35%] flex w-full flex-row justify-around text-7xl text-white cursor-pointer",
          hover ? "flex" : "hidden",
        )}>
        <span><AiFillEye /></span>
        <span><FaGithub /></span>
      </div>
    </section>
  );
};

export default ProjectCard;
