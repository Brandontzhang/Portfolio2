import { useEffect, useRef, useState } from "react";
import { cn } from "../utils";
import useSectionContext from "../context/useSectionContext";

type NavLinkProps = {
    link: string;
    className?: string;
    keyName: string;
};

const NavLink = (props: NavLinkProps) => {
    const { link, className, keyName } = props;
    const [hover, setHover] = useState(false);
    const [inView, setInView] = useState(false);
    const linkRef = useRef(null);

    const sectionContext = useSectionContext();

    useEffect(() => {
        setInView(
            sectionContext.activeSection.toLowerCase() === link.toLowerCase(),
        );
    }, [sectionContext.activeSection]);

    const scrollToSection = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault();

        const scrollToFunction: () => void =
            sectionContext.sectionNamesToScrollFunctions[link.toLowerCase()];
        scrollToFunction();
    };

    return (
        <li
            className={cn(
                "m-4 flex w-20 cursor-pointer flex-col items-center justify-center",
                className,
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={`link-${link}-${keyName}`}
        >
            <button
                ref={linkRef}
                className="uppercase"
                onClick={(event) => scrollToSection(event)}
            >
                {link}
            </button>
            <div
                className={cn("h-[2px]", {
                    "w-[75%] bg-black transition-width duration-500 ease-in-out":
                        hover || inView,
                    "w-0 bg-black transition-width duration-500 ease-in-out":
                        !hover && !inView,
                })}
            />
        </li>
    );
};

export default NavLink;
