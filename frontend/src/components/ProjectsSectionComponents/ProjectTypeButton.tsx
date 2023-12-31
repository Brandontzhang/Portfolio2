import useWorkTypeContext from "../../context/useWorkTypeContext";
import { cn } from "../../utils";

type ProjectTypeButtonProps = {
    className?: string;
    label: string;
};

const ProjectTypeButton = ({ className, label }: ProjectTypeButtonProps) => {
    const { workType, setWorkType } = useWorkTypeContext();

    return (
        <button
            onClick={() => setWorkType(label)}
            className={cn(
                className,
                "rounded-xl border border-slate-200 bg-white p-4 px-6 font-bold drop-shadow-lg",
                "hover:border-orange-400 hover:bg-orange-400 hover:text-white active:brightness-110",
                label === workType &&
                    "border-orange-400 bg-orange-400 text-white",
            )}
        >
            {label}
        </button>
    );
};

export default ProjectTypeButton;
