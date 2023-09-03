import { cn } from "../../utils";

type ContactButtonProps = {
    className?: string;
    img: string;
    children: React.ReactNode;
};

const ContactButton = ({ className, img, children } : ContactButtonProps) => {
    return (
        <button className={cn("m-4 flex flex-row items-center justify-start rounded-lg bg-white p-4 shadow-md transition-all duration-150 ease-in", className)}>
            <img className="mr-4 aspect-square h-[50px] w-[50px]" src={img} />
            <span className="text-xs sm:text-sm md:text-md lg:text-lg">{children}</span>
        </button>
    );
};

export default ContactButton;
