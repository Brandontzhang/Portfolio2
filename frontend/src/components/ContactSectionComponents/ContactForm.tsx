import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextarea";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormInputs } from "../../types";

const ContactFormSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Must be a valid email").required("Email is required"),
    message: yup.string().required("Message is required")
}).required();

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ContactFormInputs>({
        resolver: yupResolver(ContactFormSchema)
    });
    const onSubmit: SubmitHandler<ContactFormInputs> = (data) =>
        console.log(data);

    return (
        <form
            className="flex w-full flex-[0.8] flex-col items-center justify-around text-md md:text-xl lg:text-2xl"
            onSubmit={handleSubmit(onSubmit)}
        >
            <ContactInput
                className="w-full flex-[0.1]"
                field="name"
                placeholder="Your Name"
                label="Name"
                register={register}
                error={errors.name?.message}
            />
            <ContactInput
                className="w-full flex-[0.1]"
                field="email"
                placeholder="Your Email"
                label="Email"
                register={register}
                error={errors.email?.message}
            />
            <ContactTextArea
                className="w-full flex-[1]"
                field="message"
                placeholder="Message..."
                label="Message"
                register={register}
                error={errors.message?.message}
            />

            <button
                className="m-8 w-fit rounded-xl bg-blue-700 p-4 text-white hover:brightness-90 active:brightness-100"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
