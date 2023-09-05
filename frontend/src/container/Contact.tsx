import SectionHeader from "../components/SectionHeader";
import SectionWrap from "../wrapper/SectionWrap";
import ContactForm from "../components/ContactSectionComponents/ContactForm";
import ContactInfoButtonGroup from "../components/ContactSectionComponents/ContactInfoButtonGroup";
import { layers1 } from "../assets/images";

const Contact = () => {
    return (
        <SectionWrap
            sectionName="contact"
            className="relative items-center justify-start"
        >
            <SectionHeader className="z-10 flex-[0.3]">
                <h1>Let's Connect!</h1>
            </SectionHeader>

            <section className="z-10 mb-8 flex h-full w-[90%] flex-1 flex-col items-center rounded-xl bg-primary bg-opacity-90 p-8 drop-shadow-lg lg:w-1/2">
                <ContactInfoButtonGroup />
                <ContactForm />
            </section>

            <img
                className="absolute bottom-0 left-0 right-0 h-full w-full object-cover"
                src={layers1}
            />
        </SectionWrap>
    );
};

export default Contact;
