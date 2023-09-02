import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialMediaButtons = () => {
    return (
        <section className="fixed bottom-10 lg:left-10 md:text-3xl z-40">
            <div className="flex flex-col mx-4 bg-slate-100 rounded-full border border-slate-300 drop-shadow-lg">
                <div className="m-4 hover:text-amber-600 hover:cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out">
                    <MdEmail />
                </div>
                <div className="m-4 hover:text-amber-600 hover:cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out">
                    <BsLinkedin />
                </div>
                <div className="m-4 hover:text-amber-600 hover:cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out">
                    <FaGithub />
                </div>
            </div>
        </section>
    );
};

export default SocialMediaButtons;
