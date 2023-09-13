import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils";

const AboutCard = (props: any) => {
    const { img, title, description, index } = props;
    const animationDelayTimes = [
        "lg:delay-150",
        "lg:delay-200",
        "lg:delay-300",
        "lg:delay-500",
    ];
    const dimensions = 250;

    const sectionRef = useRef<HTMLDivElement>(null);
    const { isInView } = useInView({ ref: sectionRef });

    return (
        <section
            ref={sectionRef}
            className={cn(
                "m-8 flex h-fit flex-col items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 hover:delay-0 hover:duration-500",
                isInView &&
                    `opacity-100 translate-y-0 transition-all duration-1000 ease-in-out`,
                !isInView &&
                    `opacity-0 translate-y-10 transition-all duration-1000 ease-in-out`,
                animationDelayTimes[index],
            )}
        >
            <div
                className={`h-fit max-h-[${dimensions}px] w-full max-w-[${dimensions}px] rounded-lg shadow-2xl xl:max-h-[400px] xl:max-w-[400px]`}
            >
                <img className="aspect-square rounded-lg" src={img} loading="lazy"/>
            </div>
            <div
                className={`flex flex-col items-start justify-center max-w-[${dimensions}px] xl:max-w-[400px]`}
            >
                <h3 className="my-4 flex h-full text-2xl font-bold">{title}</h3>
                <p className="overflow-hidden">{description}</p>
            </div>
        </section>
    );
};

export default AboutCard;
