import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "../utils";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Contact } from "../types";

const SocialMediaButtons = () => {
    const getMediaLinksQuery = `*[_type=="contact"]`;
    const { data: contactMethods } = useQuerySanity<Contact>(getMediaLinksQuery);
    const [toggleTransition, setToggleTransition] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true);

    const getHrefFromContactInfo = (type : string) => {
        const contactDetails = contactMethods.find(c => c.type === type);

        if (contactDetails) {
            return contactDetails.href;
        }

        return "";
    }

    return (
        <section className="fixed bottom-10 z-40 md:text-3xl lg:left-10">
            <div
                className={cn(
                    "mx-4 flex flex-col overflow-hidden rounded-full border border-slate-300 bg-slate-100 drop-shadow-lg",
                    toggleTransition &&
                        "h-48 transition-all duration-1000 ease-in-out md:h-64",
                    !toggleTransition &&
                        "h-12 transition-all duration-1000 ease-in-out md:h-16",
                )}
                onTransitionEnd={() => setMenuOpen(toggleTransition)}
            >
                {menuOpen && (
                    <>
                        <MenuButton display={toggleTransition}>
                            <a href={`mailto:${getHrefFromContactInfo("email")}`}>
                                <MdEmail />
                            </a>
                        </MenuButton>
                        <MenuButton display={toggleTransition}>
                            <a href={getHrefFromContactInfo("linkedin")}>
                                <BsLinkedin />
                            </a>
                        </MenuButton>
                        <MenuButton display={toggleTransition}>
                            <a href={getHrefFromContactInfo("github")}>
                                <FaGithub />
                            </a>
                        </MenuButton>
                    </>
                )}
                <MenuButton
                    display={true}
                    onClick={() => setToggleTransition((prev) => !prev)}
                >
                    {menuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
                </MenuButton>
            </div>
        </section>
    );
};

const MenuButton = (props: any) => {
    return (
        <div
            onClick={props.onClick}
            className={cn(
                "m-4 transition-all duration-1000 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-amber-600",
                props.display && "opacity-100",
                !props.display && "opacity-0",
            )}
        >
            {props.children}
        </div>
    );
};

export default SocialMediaButtons;
