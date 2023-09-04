import { createContext, useState } from "react";

type SectionContextType = {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    sectionNamesToScrollFunctions: SectionNameToScrollToFunctionMap;
    setSectionNamesToScrollFunctions: React.Dispatch<
        React.SetStateAction<SectionNameToScrollToFunctionMap>
    >;
};

type SectionNameToScrollToFunctionMap = {
    [sectionName: string]: () => void;
};

export const SectionContext = createContext<SectionContextType | undefined>(
    undefined,
);

export const SectionContextProvider = (props: any) => {
    const [activeSection, setActiveSection] = useState("home");
    const [sectionNamesToScrollFunctions, setSectionNamesToScrollFunctions] =
        useState<SectionNameToScrollToFunctionMap>({});

    return (
        <SectionContext.Provider
            value={{
                activeSection: activeSection,
                setActiveSection: setActiveSection,
                sectionNamesToScrollFunctions: sectionNamesToScrollFunctions,
                setSectionNamesToScrollFunctions:
                    setSectionNamesToScrollFunctions,
            }}
        >
            {props.children}
        </SectionContext.Provider>
    );
};
