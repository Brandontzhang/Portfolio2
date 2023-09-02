import { useEffect, useState } from "react";
import { client } from "../client";

export const useQuerySanity = <T>(query: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<any>();

    const fetchData = async () => {
        try {
            let data = await client.fetch(query);
            setIsLoading(false);
            setData(data);
        } catch (err) {
            setIsLoading(false);
            setError(err);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    return { isLoading, data, error };
};
