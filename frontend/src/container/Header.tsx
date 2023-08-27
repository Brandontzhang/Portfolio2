import { useRef } from "react";
import { brandon, css, react, ts } from "../assets/images";
import FadeInTextbox from "../components/FadeInTextbox";
import { useInView } from "../hooks/useInView";
import { cn } from "../utils";
import FadeInLogobox from "../components/FadeInLogobox";

const Header = () => {
  const circle = useRef<HTMLDivElement>(null);
  const { isInView: circleInView } = useInView({ ref: circle });

  return (
    <header className="flex h-fit min-h-screen w-full flex-col justify-evenly pt-28 md:flex-row md:pt-24 z-0">
      <section className="relative flex w-full flex-col items-center justify-center md:bottom-32 md:right-20">
        <FadeInTextbox className="z-20 m-4 flex h-fit w-fit flex-row items-center justify-end rounded-lg bg-slate-100 p-4 drop-shadow-lg">
          <span className="m-2 pr-6 text-3xl">👋</span>
          <div className="flex flex-col justify-start">
            <p className="text-slate-600">Hello I am</p>
            <p className="text-5xl">Brandon</p>
          </div>
        </FadeInTextbox>

        <FadeInTextbox className="z-20 m-4 flex h-fit w-fit flex-row items-center justify-end rounded-lg bg-slate-100 p-4 drop-shadow-lg">
          <div className="flex flex-col items-start uppercase text-slate-600">
            <p>Full-Stack Web Developer</p>
            <p>Software Solutions Engineer</p>
          </div>
        </FadeInTextbox>
      </section>

      <section className="flex h-[500px] min-h-fit md:h-screen w-full items-center justify-center md:top-0">
        <img className="z-10 min-h-fit min-w-fit md:scale-125" src={brandon} />
        <div
          ref={circle}
          className={cn(
            "absolute z-0 h-[480px] w-[480px] rounded-[50%] bg-gradient-to-br from-orange-100 to-orange-300 drop-shadow-lg md:scale-125",
            {
              "scale-100 opacity-100 transition-all duration-1000":
                circleInView,
              "scale-0 opacity-0": !circleInView,
            },
          )}
        />
      </section>

      <section className="relative z-10 flex min-h-fit w-full flex-row items-center justify-center md:flex-col md:overflow-hidden mt-4">
        <FadeInLogobox
          img={react}
          className={
            "flex h-[75px] w-[75px] items-center justify-center rounded-full bg-slate-50 p-2 drop-shadow-lg relative m-4 bottom-24 md:bottom-10 md:right-10"
          }
        />
        <FadeInLogobox
          img={ts}
          className={
            "flex h-[200px] w-[200px] items-center justify-center rounded-full bg-slate-50 drop-shadow-lg relative m-4 md:left-20"
          }
        />
        <FadeInLogobox
          img={css}
          className={
            "flex h-[150px] w-[150px] items-center justify-center rounded-full bg-slate-50 p-2 drop-shadow-lg relative m-4 bottom-24 md:top-10"
          }
        />
      </section>
    </header>
  );
};

export default Header;
