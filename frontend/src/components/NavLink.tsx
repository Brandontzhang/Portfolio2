import { useRef, useState } from "react";
import { cn } from "../utils";

const NavLink = (props : any) => {
    const { link, className, keyName } = props;
    const [hover, setHover] = useState(false);
    const linkRef = useRef(null);

    return (
        <li className={cn('flex flex-col justify-center items-center m-4 w-20', className)}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}  
            key={`link-${link}-${keyName}`}>
            <a ref={linkRef} className="uppercase" href={`#${link}`}>{link}</a>
            <div className={cn(
                "h-[2px]",
                {
                    "w-[75%] bg-black transition-width ease-in-out duration-500" : hover,
                    "w-0 bg-black transition-width ease-in-out duration-500": !hover,
                }
            )} />
        </li>
    )
}

export default NavLink