import { useState } from "react";
import { b_logo, sidenav_bg } from "../assets/images";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { cn } from "../utils";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const links: string[] = ["Home", "About", "Projects", "Skills", "Contact"];

    return (
        <nav className="fixed z-40 flex w-full items-center justify-between border bg-slate-100 backdrop-blur-sm bg-opacity-50">
            <div className="flex-start m-2 flex items-center justify-center">
                <img
                    className="aspect-[150px_160px] h-[35px] md:h-[45px] md:m-4"
                    src={b_logo}
                ></img>
            </div>
            <ul className="hidden flex-row md:flex">
                {links.map((link) => (
                    <NavLink key={`${link}`} keyName="row" link={link} setToggleMenu={setToggleMenu} />
                ))}
            </ul>
            <div
                onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
                className="m-2 flex items-center justify-center text-3xl md:hidden"
            >
                <GiHamburgerMenu />
            </div>
            <aside
                className={cn(
                    "absolute right-0 top-0 h-screen w-[41%] bg-gradient-to-b from-slate-100 via-slate-50 via-40% md:hidden",
                    {
                        "left-[60%] transition-all duration-500 ease-in-out":
                            toggleMenu,
                        "left-[100%] transition-all duration-500 ease-in-out":
                            !toggleMenu,
                    },
                )}
            >
                <img
                    className="absolute -z-10 h-full object-cover"
                    src={sidenav_bg}
                />
                <div
                    onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
                    className="relative left-[75%] top-4 text-3xl"
                >
                    <RxCross2 />
                </div>
                <ul>
                    {links.map((link) => (
                        <NavLink
                            key={`${link}`}
                            keyName="col"
                            className="z-10 items-start justify-center"
                            link={link}
                            setToggleMenu={setToggleMenu}
                        />
                    ))}
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;
