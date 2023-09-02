import { UseFormRegister } from "react-hook-form";
import { ContactFormInputs } from "../../types";
import { cn } from "../../utils";

type ContactTextAreaType = {
    className?: string;
    register: UseFormRegister<ContactFormInputs>,
    error: string | undefined,
    label: string,
    placeholder: string,
    field: "message"
}

const ContactTextArea = ({ className, register, label, placeholder, field, error } : ContactTextAreaType ) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <label className="my-4">{label}:</label>
            <textarea
                className={cn("rounded-lg p-4 focus:outline-none", className)}
                {...register(field)}
                placeholder={placeholder}
            />
            {error && <span className="text-red-600">{error}</span>}
        </div>
    );
};

export default ContactTextArea;
