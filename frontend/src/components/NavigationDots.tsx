import useSectionContext from "../context/useSectionContext";
import { cn } from "../utils";

const NavigationDots = () => {
    const sectionContext = useSectionContext();
    const links: string[] = ["home", "about", "work", "skills", "contact"];

    return (
        <section className="hidden md:block fixed right-0 bottom-[37%] z-40">
            <div className="flex flex-col">
                {links.map((link: string, index: number) => (
                    <div
                        key={link + index}
                        className={cn(
                            "m-4 h-[10px] w-[10px] rounded-full",
                            link === sectionContext.activeSection.toLowerCase()
                                ? "bg-amber-800"
                                : "bg-amber-300",
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default NavigationDots;
