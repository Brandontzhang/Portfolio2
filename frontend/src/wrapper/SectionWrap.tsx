import { ReactNode, useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";
import useSectionContext from "../context/useSectionContext";
import { cn } from "../utils";

type PropsType = {
    children: ReactNode;
    sectionName: string;
    className?: string;
};

const SectionWrap = ({ children, sectionName, className }: PropsType) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { isInView } = useInView({ ref: sectionRef });
    const sectionContext = useSectionContext();

    useEffect(() => {
        sectionContext.setSectionNamesToScrollFunctions(prev => {
            return {
                ...prev,
                [sectionName] : scrollToSection
            }
        })
    }, []);

    useEffect(() => {
        if (isInView) {
            sectionContext.setActiveSection(sectionName);
        }
    }, [isInView]);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section
            className={cn(className, "flex min-h-screen w-full flex-col")}
            ref={sectionRef}
        >
            {children}
        </section>
    );
};

export default SectionWrap;
