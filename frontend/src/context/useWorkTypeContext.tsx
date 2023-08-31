import { useContext } from "react";
import { WorkTypeContext } from "./WorkTypeContextProvider";

const useWorkTypeContext = () => {
    const workTypeContext = useContext(WorkTypeContext);

    if (!workTypeContext) {
        throw new Error("useWorkTypeContext must be used within the WorkTypeContextProvider",);
    }

    return workTypeContext;
};

export default useWorkTypeContext;
