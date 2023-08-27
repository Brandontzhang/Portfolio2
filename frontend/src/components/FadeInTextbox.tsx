import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils";

const FadeInTextbox = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView: isInView } = useInView({ ref: ref });
  const { children, className } = props;

  return (
    <section
      ref={ref}
      className={cn(className, {
        "translate-x-0 opacity-100 transition-all duration-700 ease-in":
          isInView,
        "-translate-x-12 opacity-0": !isInView,
      })}
    >
      {children}
    </section>
  );
};

export default FadeInTextbox;
