import { cn } from "../utils";

type SectionHeaderProps = {
    children: React.ReactNode;
    className?: string;
};

const SectionHeader = ({ children, className }: SectionHeaderProps) => {
    return (
        <h2
            className={cn(
                "flex-1 m-12 h-full flex items-center justify-center text-[1.25rem] md:text-3xl lg:text-5xl text-center",
                className,
            )}
        >
            <span className="text-center text-2xl md:text-3xl lg:text-5xl">
                {children}
            </span>
        </h2>
    );
};

export default SectionHeader;
