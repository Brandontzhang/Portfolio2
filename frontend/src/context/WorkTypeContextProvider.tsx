import { createContext, useState } from "react";

type WorkTypeContext = {
    workType: string;
    setWorkType: React.Dispatch<React.SetStateAction<string>>;
};

export const WorkTypeContext = createContext<WorkTypeContext | undefined>(
    undefined,
);

export const WorkTypeContextProvider = (props: any) => {
    const [workType, setWorkType] = useState("All");

    return (
        <WorkTypeContext.Provider
            value={{ workType: workType, setWorkType: setWorkType }}
        >
            {props.children}
        </WorkTypeContext.Provider>
    );
};
