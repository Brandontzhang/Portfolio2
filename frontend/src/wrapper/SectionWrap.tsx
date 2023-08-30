import { ReactNode, useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";
import useSectionContext from "../context/useSectionContext";

type PropsType = {
    children : ReactNode,
    sectionName : string
}

const SectionWrap = (props: PropsType) => {
  const sectionRef = useRef(null);
  const { isInView } = useInView({ ref: sectionRef });
  const sectionContext = useSectionContext();

  const { children, sectionName } = props;

  useEffect(() => {
    if (isInView) {
      sectionContext.setActiveSection(sectionName);
    }
  }, [isInView]);
  return <div ref={sectionRef}>{children}</div>;
};

export default SectionWrap;
