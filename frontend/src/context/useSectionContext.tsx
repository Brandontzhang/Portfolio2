import { useContext } from "react";
import { SectionContext } from "./SectionContextProvider";

const useSectionContext = () => {
    const sectionContext = useContext(SectionContext);

    if (!sectionContext) {
        throw new Error(
            "useSectionContext must be used within the SectionContextProvider",
        );
    }

    return sectionContext;
};

export default useSectionContext;
