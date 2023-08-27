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
        "scale-100 transition-all duration-700 ease-in":
          isInView,
        "opacity-0": !isInView,
      })}
    >
        <img className="object-scale-down" src={img} />
    </div>
  );
};

export default FadeInLogobox;
