import { useRef } from "react";
import { cn } from "../utils";
import { useInView } from "../hooks/useInView";

const FadeInCircle = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const { isInView } = useInView({ ref: ref });
    const { className } = props;

    return (
        <div
            ref={ref}
            className={cn(
                className,
                "absolute rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg",
                isInView &&
                    `translate-y-0 opacity-100 transition-circle duration-1000 delay-300 md:scale-150`,
                !isInView && `translate-y-20 opacity-0`,
            )}
        />
    );
};

export default FadeInCircle;
