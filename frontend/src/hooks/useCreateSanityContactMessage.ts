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
        sendRequestForEmail(data); 
        setIsLoading(false);
        setIsMessageSubmitted(true);
    }

    const sendRequestForEmail = async(data : ContactFormInputs) => {
        const url = `https://api.emailjs.com/api/v1.0/email/send`;
        const reqBody = {
            service_id: 'service_tas3xk7',
            template_id: 'template_y7s4geu',
            user_id: 'exk9PJ7CWBWuMxpr1',
            template_params: {
                from_name: data.name,
                message: data.message,
                reply_to: data.email
            }    
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }

        fetch(url, requestOptions);
    }

    return { isMessageSubmitted, isLoading, error, setIsMessageSubmitted, submitContactMessage };
}
