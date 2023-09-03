import { email, phone } from "../../assets/images";
import ContactButton from "./ContactButton";

const ContactInfoButtonGroup = () => {
    return (
        <div className="flex sm:w-3/4 md:w-1/2 lg:w-3/4 flex-col items-center justify-around lg:flex-row">
            <ContactButton
                className="flex-1 w-full min-w-fit hover:bg-blue-100 hover:shadow-blue-300/50"
                img={email}
            ><a href="mailto:zhangtbrandon2@email.com">zhangtbrandon2@email.com</a></ContactButton>
            <ContactButton
                className="flex-1 w-full min-w-fit hover:bg-green-100 hover:shadow-green-300/50"
                img={phone}
            ><a href="tel:+1347-557-5245">(1)347-557-5245</a></ContactButton>
        </div>
    );
};

export default ContactInfoButtonGroup;
