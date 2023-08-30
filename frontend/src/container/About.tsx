import AboutCard from "../components/AboutCard";
import { urlFor } from "../client";
import { useAbouts } from "../hooks/useAbouts";
import { About } from "../types";
import SectionWrap from "../wrapper/SectionWrap";

const About = () => {
  const highlightSkills = ["Angular", "React", "TypeScript", "Java"];
  const { data: abouts } = useAbouts();

  return (
    <SectionWrap sectionName={"about"}>
      <section className="flex flex-col items-center justify-center">
        <h2 className="flex flex-col items-center justify-center font-bold sm:text-xl">
          <p className="flex w-fit flex-col items-center">
            <span className="m-4 text-sm text-blue-400 sm:text-3xl lg:text-5xl">
              Full-Stack Web Developer
            </span>
            <span className="m-4 text-sm sm:text-xl md:text-3xl">
              {" "}
              developing web applications using{" "}
            </span>
            <span className="m-4">
              {highlightSkills.map((skill: string, index: number) => (
                <span key={skill} className="text-sm text-blue-400 sm:text-3xl lg:text-5xl">
                  {skill}
                  <span>{index === highlightSkills.length - 1 ? "" : `, `}</span>
                </span>
              ))}
            </span>
          </p>
          <div className="m-5 h-[5px] w-[55%] bg-slate-400" />
        </h2>
        <section className="my-4 grid h-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:w-[80%]">
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
