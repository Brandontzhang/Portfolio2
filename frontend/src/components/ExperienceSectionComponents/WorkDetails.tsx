import { Work } from "../../types";
import { cn, getMonthYear } from "../../utils";

type WorkDetailsPropsType = {
    work: Work;
    className?: string;
};

const WorkDetails = ({ work, className }: WorkDetailsPropsType) => {
    return (
        <div
            className={cn(
                className,
                "mb-10 md:text-2xl italic text-slate-500 text-center sm:text-start",
            )}
        >
            <h3 className="text-2xl md:text-3xl font-bold not-italic text-slate-800">
                {work.company}
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
