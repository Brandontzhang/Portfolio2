import { Work } from "../../types";
import { cn, getMonthYear } from "../../utils";
import { AiOutlineInfoCircle } from "react-icons/ai";

type WorkDetailsPropsType = {
    work: Work;
    className?: string;
};

const WorkDetails = ({ work, className }: WorkDetailsPropsType) => {
    return (
        <div
            className={cn(
                className,
                "mb-10 w-full text-center italic text-slate-500 sm:text-start md:text-2xl",
            )}
        >
            <h3 className="group relative flex flex-row justify-center text-2xl font-bold not-italic text-slate-800 sm:justify-start md:text-3xl">
                <span className="flex flex-row">
                    {work.company}
                    <span className="hover:text-orange-400 mx-2">
                        <AiOutlineInfoCircle />
                    </span>
                </span>
                <div className="absolute top-8 z-50 hidden w-full rounded-xl bg-white p-4 font-normal drop-shadow-lg group-hover:block">
                    {work.desc}
                </div>
            </h3>
            <p>{work.name}</p>
            {work.current ? (
                <span className={work.current ? "text-orange-400" : "hidden"}>
                    Current Position
                </span>
            ) : (
                <span>End: {getMonthYear(new Date(work.endDate))}</span>
            )}
        </div>
    );
};

export default WorkDetails;
