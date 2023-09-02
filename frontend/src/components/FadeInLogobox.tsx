import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils";

const FadeInLogobox = (props: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const { isInView: isInView } = useInView({ ref: ref });
    const { className, img } = props;

    return (
        <div
            ref={ref}
            className={cn(className, {
                "tanslate-y-0 opacity-100 transition-circle delay-300 duration-700 ease-in":
                    isInView,
                "translate-y-10 opacity-0": !isInView,
            })}
        >
            <img className="object-scale-down" src={img} />
        </div>
    );
};

export default FadeInLogobox;
