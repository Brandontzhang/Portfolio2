import { brandon, css, react, ts } from "../assets/images";
import FadeInTextbox from "../components/FadeInTextbox";
import FadeInLogobox from "../components/FadeInLogobox";
import FadeInCircle from "../components/FadeInCircle";
import SectionWrap from "../wrapper/SectionWrap";

const Header = () => {
    return (
        <SectionWrap sectionName="home">
            <header className="z-0 flex h-fit min-h-screen w-full flex-[0.5] flex-col justify-evenly pt-28 md:flex-row md:pt-24">
                <section className="relative flex w-full flex-col items-center justify-center md:bottom-32 md:right-20">
                    <div className="z-30 flex flex-col items-center md:items-start lg:scale-125">
                        <FadeInTextbox className="m-4 flex h-fit w-fit flex-row items-center justify-end rounded-lg bg-slate-100 p-4 drop-shadow-lg">
                            <span className="m-2 pr-6 text-3xl">👋</span>
                            <div className="flex flex-col justify-start">
                                <p className="text-slate-600">Hello I am</p>
                                <p className="text-4xl sm:text-5xl">Brandon</p>
                            </div>
                        </FadeInTextbox>
                        <FadeInTextbox className="m-4 flex h-fit w-fit flex-row items-center justify-end rounded-lg bg-slate-100 p-4 drop-shadow-lg">
                            <div className="flex flex-col items-start text-sm uppercase text-slate-600 sm:text-lg">
                                <p>Full-Stack Web Developer</p>
                                <p>Software Solutions Engineer</p>
                            </div>
                        </FadeInTextbox>
                    </div>
                    <div className="absolute left-96 top-40 z-0 hidden h-[250px] w-[250px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                    <div className="absolute bottom-96 right-96 z-0 hidden h-[50px] w-[50px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                    <div className="absolute bottom-20 left-40 z-0 hidden h-[150px] w-[150px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                </section>
                <section className="flex h-[500px] min-h-fit w-full flex-[0.5] items-center justify-center md:top-0 md:h-screen">
                    <img
                        className="z-30 sm:min-h-fit sm:min-w-fit md:scale-150"
                        src={brandon}
                    />
                    <FadeInCircle className="z-20 h-[300px] w-[300px] sm:h-[480px] sm:w-[480px]" />
                </section>
                <section className="relative flex w-full flex-row items-center justify-center md:flex-col md:overflow-hidden">
                    <FadeInLogobox
                        img={react}
                        className={
                            "relative bottom-24 z-20 m-4 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-none p-2 drop-shadow-lg sm:bg-slate-50 md:bottom-10 md:right-10"
                        }
                    />
                    <FadeInLogobox
                        img={ts}
                        className={
                            "relative z-20 m-4 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-none drop-shadow-lg sm:bg-slate-50 md:left-20"
                        }
                    />
                    <FadeInLogobox
                        img={css}
                        className={
                            "relative bottom-24 z-20 m-4 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-none p-2 drop-shadow-lg sm:bg-slate-50 md:top-10"
                        }
                    />
                    <div className="absolute right-56 top-40 hidden h-[75px] w-[75px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                    <div className="absolute right-96 hidden h-[25px] w-[25px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                    <div className="absolute bottom-40 right-40 hidden h-[225px] w-[225px] rounded-[50%] bg-gradient-to-br from-primary to-orange-300 drop-shadow-lg md:block" />
                </section>
            </header>
        </SectionWrap>
    );
};

export default Header;
