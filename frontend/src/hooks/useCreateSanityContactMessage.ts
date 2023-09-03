import { useState } from "react";
import { ContactFormInputs } from "../types";
import { client } from "../client";

export const useCreateSanityContactMessage = () => {
    const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>();

    const submitContactMessageToSanity = async ( data : ContactFormInputs) => {
        const { name, email, message } = data;
        const contact = {
            _type: 'message',
            name: name,
            email: email,
            message: message
        }

        try {
            const response = await client.create(contact);
            return response;
        } catch (err) {
            setError(err);
        }
    }

    const submitContactMessage = async(data : ContactFormInputs) => {
        setIsLoading(true);
        await submitContactMessageToSanity(data);
        setIsLoading(false);
        setIsMessageSubmitted(true);
    }

    return { isMessageSubmitted, isLoading, error, setIsMessageSubmitted, submitContactMessage };
}
