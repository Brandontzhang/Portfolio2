import AboutCard from "../components/AboutCard";
import { urlFor } from "../client";
import { useAbouts } from "../hooks/useAbouts";
import { About } from "../types";
import SectionWrap from "../wrapper/SectionWrap";
import SectionHeader from "../components/SectionHeader";

const About = () => {
    const { data: abouts } = useAbouts();
    const highlightSkills = ["Angular", "React", "TypeScript", "Java"];

    return (
        <SectionWrap sectionName={"about"}>
            <section className="flex min-h-screen flex-col items-center justify-center bg-white">
                <SectionHeader className="md:w-1/2">
                    <p className="text-blue-600">Full-Stack Web Developer</p>
                    <p>creating dynamic web applications with</p>
                    <p className="text-blue-600">
                        {highlightSkills.join(", ")}
                    </p>
                </SectionHeader>

                <section className="grid h-fit grid-cols-1 sm:grid-cols-2 lg:mb-40 lg:mt-20 lg:grid-cols-4 xl:w-[80%]">
                    {abouts.map((about: About, index: number) => (
                        <AboutCard
                            key={index}
                            img={urlFor(about.imgUrl)}
                            title={about.title}
                            description={about.description}
                            index={index}
                        />
                    ))}
                </section>
            </section>
        </SectionWrap>
    );
};

export default About;
