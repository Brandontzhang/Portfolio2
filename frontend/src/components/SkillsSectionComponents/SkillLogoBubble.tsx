import { urlFor } from "../../client";
import { Skill } from "../../types";
import { cn } from "../../utils";

type SkillContainerProps = {
    skill: Skill;
    className?: string;
};

const SkillLogoBubble = ({ className, skill }: SkillContainerProps) => {
    return (
        <div
            className={cn(
                className,
                "flex flex-col items-center justify-center",
            )}
        >
            <div className="rounded-full bg-slate-200 object-cover p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-xl">
                <img src={urlFor(skill.icon)} />
            </div>
            <span className="p-2">{skill.name}</span>
        </div>
    );
};

export default SkillLogoBubble;
