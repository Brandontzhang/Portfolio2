import { SubmitHandler, useForm } from "react-hook-form";
import { email, phone } from "../assets/images";
import ContactButton from "../components/ContactSectionComponents/ContactButton";
import SectionHeader from "../components/SectionHeader";
import SectionWrap from "../wrapper/SectionWrap";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormInputs } from "../types";
import ContactInput from "../components/ContactSectionComponents/ContactInput";
import ContactTextArea from "../components/ContactSectionComponents/ContactTextarea";



const ContactFormSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Must be a valid email").required("Email is required"),
    message: yup.string().required("Message is required")
}).required();


const Contact = () => {
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
        <SectionWrap
            sectionName="contact"
            className="items-center justify-start"
        >
            <SectionHeader className="flex-[0.3]">
                <h1>Let's Connect!</h1>
            </SectionHeader>

            <section className="flex w-[90%] lg:w-1/2 h-full flex-1 flex-col">
                <div className="flex w-full flex-col justify-around sm:flex-row">
                    <ContactButton
                        className="w-[310px] hover:bg-blue-100 hover:shadow-blue-300/50"
                        img={email}
                        value={"zhangtbrandon2@gmail.com"}
                    ></ContactButton>
                    <ContactButton
                        className="w-[310px] hover:bg-green-100 hover:shadow-green-300/50"
                        img={phone}
                        value={"(1)347-557-5245"}
                    ></ContactButton>
                </div>

                <form
                    className="flex-[0.8] flex w-full flex-col justify-around text-2xl"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <ContactInput className="flex-[0.1] focus:drop-shadow-xl" field="name" placeholder="Your Name" label="Name" register={register} error={errors.name?.message} />
                    <ContactInput className="flex-[0.1] focus:drop-shadow-xl" field="email" placeholder="Your Email" label="Email" register={register} error={errors.email?.message} />
                    <ContactTextArea className="flex-[1] focus:drop-shadow-xl" field="message" placeholder="Message..." label="Message" register={register} error={errors.message?.message} />
                    
                    <button className="m-4" type="submit">Submit</button>
                </form>
            </section>
        </SectionWrap>
    );
};

export default Contact;
