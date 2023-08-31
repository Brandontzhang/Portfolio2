import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { urlFor } from "../client";
import { Project } from "../types";
import { cn } from "../utils";

type ProjectCardPropsType = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardPropsType) => {
  const { name, desc, imgUrl } = project;

  return (
    <section className="relative m-4  w-[532px] flex-shrink-0 flex-col rounded-xl bg-slate-50 p-4">
      <div className="relative w-full flex justify-center items-center">
        <img
          className={
            "aspect-square h-[500px] w-[500px] rounded-full drop-shadow-lg"
          }
          src={urlFor(imgUrl)}
        />
        <div
          className={cn(
            "opacity-0 hover:opacity-100 absolute top-0 flex aspect-square h-[500px] w-[500px] flex-row items-center justify-around rounded-full bg-black bg-opacity-50 text-7xl text-white",
          )}
        >
          <span className="cursor-pointer">
            <AiFillEye />
          </span>
          <span className="cursor-pointer">
            <FaGithub />
          </span>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default ProjectCard;
