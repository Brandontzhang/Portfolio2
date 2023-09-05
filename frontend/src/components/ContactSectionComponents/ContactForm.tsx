import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormInputs } from "../../types";
import { cn } from "../../utils";
import { useCreateSanityContactMessage } from "../../hooks/useCreateSanityContactMessage";

const ContactFormSchema = yup
    .object({
        name: yup.string().required("Name is required"),
        email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
        message: yup.string().required("Message is required"),
    })
    .required();

const ContactForm = () => {
    const {
        isMessageSubmitted,
        isLoading,
        error,
        submitContactMessage,
        setIsMessageSubmitted,
    } = useCreateSanityContactMessage();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: yupResolver(ContactFormSchema),
    });

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        await submitContactMessage(data);
    };

    const resetForm = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault();
        reset();
        setIsMessageSubmitted(false);
    };

    return (
        <form
            className="text-md flex w-full flex-1 flex-col items-center justify-around md:text-xl lg:text-2xl"
            onSubmit={handleSubmit(onSubmit)}
        >
            <ContactInput
                className={cn(
                    "w-full flex-[0.1]",
                    isMessageSubmitted && "hidden",
                )}
                field="name"
                placeholder="Your Name"
                label="Name"
                register={register}
                error={errors.name?.message}
            />
            <ContactInput
                className={cn(
                    "w-full flex-[0.1]",
                    isMessageSubmitted && "hidden",
                )}
                field="email"
                placeholder="Your Email"
                label="Email"
                register={register}
                error={errors.email?.message}
            />
            <ContactTextArea
                className={cn("w-full flex-1", isMessageSubmitted && "hidden")}
                field="message"
                placeholder="Message..."
                label="Message"
                register={register}
                error={errors.message?.message}
            />

            {isMessageSubmitted && !error && (
                <span className="flex flex-1 items-center lg:text-4xl">
                    Thanks For Getting In Touch!
                </span>
            )}
            {isMessageSubmitted && error && (
                <span className="flex flex-1 items-center lg:text-4xl">
                    Unable to send the message. Please try sending an email
                    directly.
                </span>
            )}

            <button
                className={cn(
                    "m-8 w-fit rounded-xl bg-blue-700 p-4 text-white hover:brightness-90 active:brightness-100",
                    isMessageSubmitted && "hidden",
                )}
                type="submit"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </button>
            <button
                className={cn(
                    "m-8 w-fit rounded-xl bg-blue-700 p-4 text-white hover:brightness-90 active:brightness-100",
                    !isMessageSubmitted && "hidden",
                )}
                onClick={(event) => resetForm(event)}
            >
                Send New Message
            </button>
        </form>
    );
};

export default ContactForm;
