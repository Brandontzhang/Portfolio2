import { createContext, useState } from "react";

type SectionContextType = {
    activeSection : string;
    setActiveSection : React.Dispatch<React.SetStateAction<string>>
}

export const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionContextProvider = (props : any) => {

    const [activeSection, setActiveSection] = useState("home");

    return (
        <SectionContext.Provider value={{activeSection : activeSection, setActiveSection: setActiveSection}}>
            {props.children}
        </SectionContext.Provider>
    )

}