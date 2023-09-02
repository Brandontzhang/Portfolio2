import { cn } from "../../utils";

type ContactButtonProps = {
    className?: string;
    img: string;
    value: string;
};

const ContactButton = ({ className, img, value} : ContactButtonProps) => {
    return (
        <button className={cn("m-4 flex flex-row items-center justify-start rounded-lg bg-white p-4 shadow-md transition-all duration-150 ease-in", className)}>
            <img className="mr-4 aspect-square h-[50px] w-[50px]" src={img} />
            <span className="text-md">{value}</span>
        </button>
    );
};

export default ContactButton;
