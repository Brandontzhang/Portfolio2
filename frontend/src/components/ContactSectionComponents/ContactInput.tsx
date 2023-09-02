import { UseFormRegister } from "react-hook-form";
import { ContactFormInputs } from "../../types";
import { cn } from "../../utils";

type ContactInputType = {
    className?: string;
    register: UseFormRegister<ContactFormInputs>,
    error: string | undefined,
    label: string,
    placeholder: string,
    field: "name" | "email"
}

const ContactInput = ({ className, register, label, placeholder, field, error } : ContactInputType ) => {
    return (
        <div className={cn("flex flex-col", className)}>
            <label className="my-4">{label}:</label>
            <input
                className={cn("rounded-lg p-4 focus:outline-none", className)}
                {...register(field)}
                placeholder={placeholder}
            />
            {error && <span className="text-red-600">{error}</span>}
        </div>
    );
};

export default ContactInput;
