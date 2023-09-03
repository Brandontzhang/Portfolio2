import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "../utils";

const MenuButton = (props: any) => {
    return (
        <div
            onClick={props.onClick}
            className={cn(
                "m-4 transition-all duration-1000 ease-in-out hover:scale-125 hover:cursor-pointer hover:text-amber-600",
                props.display && "opacity-100",
                !props.display && "opacity-0"
            )}
        >
            {props.children}
        </div>
    );
};

const SocialMediaButtons = () => {
    const [toggleTransition, setToggleTransition] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true);

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
                            <MdEmail />
                        </MenuButton>
                        <MenuButton display={toggleTransition}>
                            <BsLinkedin />
                        </MenuButton>
                        <MenuButton display={toggleTransition}>
                            <FaGithub />
                        </MenuButton>
                    </>
                )}
                <MenuButton display={true} onClick={() => setToggleTransition((prev) => !prev)}>
                    {menuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
                </MenuButton>
            </div>
        </section>
    );
};

export default SocialMediaButtons;
