import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { urlFor } from "../../client";
import { Project } from "../../types";
import { cn } from "../../utils";

type ProjectCardPropsType = {
    project: Project;
    className?: string;
};
//TODO: Figure out how to load in prettier when switching types
const ProjectCard = ({ project, className }: ProjectCardPropsType) => {
    const { name, desc, imgUrl, url, github } = project;

    return (
        <section
            className={cn(
                className,
                "m-4 w-[532px] flex-shrink-0 flex-col rounded-xl bg-slate-50 p-4",
            )}
        >
            <div className="relative flex w-full items-center justify-center">
                <img
                    className={
                        "aspect-square h-[500px] w-[500px] rounded-full drop-shadow-lg object-cover"
                    }
                    src={urlFor(imgUrl)}
                    loading="lazy"
                />
                <div
                    className={cn(
                        "absolute top-0 flex aspect-square h-[500px] w-[500px] flex-row items-center justify-around rounded-full bg-black bg-opacity-50 text-7xl text-white opacity-0 hover:opacity-100",
                    )}
                >
                    {url && <a href={url}>
                        <AiFillEye />
                    </a>}
                    {github && <a href={github}>
                        <FaGithub />
                    </a>}
                </div>
            </div>

            <div className="p-8">
                <h1 className="text-3xl font-bold py-4">{name}</h1>
                <p>{desc}</p>
            </div>
        </section>
    );
};

export default ProjectCard;
