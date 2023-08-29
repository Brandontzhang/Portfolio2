import { useEffect, useState } from "react";
import { client } from "../client";

export const useAbouts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState<any>();

    const query : string = `*[_type=="abouts"] | order(_createdAt asc)`;

    const fetchData = async () => {
        try {
            console.log(query);
            let data = await client.fetch(query);
            console.log(data);
            setIsLoading(false);
            setData(data);
        } catch(err) {
            setIsLoading(false);
            setError(err);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);

    return { isLoading, data, error };
}