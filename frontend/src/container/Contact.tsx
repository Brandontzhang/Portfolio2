import SectionHeader from "../components/SectionHeader";
import SectionWrap from "../wrapper/SectionWrap";
import ContactForm from "../components/ContactSectionComponents/ContactForm";
import ContactInfoButtonGroup from "../components/ContactSectionComponents/ContactInfoButtonGroup";

const Contact = () => {
    return (
        <SectionWrap
            sectionName="contact"
            className="items-center justify-start"
        >
            <SectionHeader className="flex-[0.3]">
                <h1>Let's Connect!</h1>
            </SectionHeader>

            <section className="flex h-full w-[90%] flex-1 flex-col items-center lg:w-1/2">
                <ContactInfoButtonGroup />
                <ContactForm />
            </section>
        </SectionWrap>
    );
};

export default Contact;
