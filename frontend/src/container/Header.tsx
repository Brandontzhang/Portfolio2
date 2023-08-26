import { useRef } from "react";
import { brandon } from "../assets/images";
import { cn } from "../utils";

const Header = () => {

  const intro = useRef<HTMLDivElement>(null);

  return (
    <header className="h-screen pt-16 md:pt-24">
      <section ref={intro} className={cn(
        "flex w-fit flex-row items-center justify-end bg-slate-100 drop-shadow-lg rounded-lg m-4 p-4",
      )}>
        <span className="m-2 pr-6 text-3xl">👋</span>
        <div className="flex flex-col justify-start">
          <p className="text-slate-600">Hello I am</p>
          <p className="text-5xl">Brandon</p>
        </div>
      </section>

      <section>
        <p>Software Solutions Engineer</p>
        <p>Web Developer</p>
      </section>

      <section>
        <img src={brandon} />
      </section>
    </header>
  );
};

export default Header;
