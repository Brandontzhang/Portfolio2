import { backend, ballroom, frontend, learning } from "../assets/images";
import AboutCard from "../components/AboutCard";

const About = () => {
  const highlightSkills = ["Angular", "React", "TypeScript", "Java"];

  return (
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
              <span className="text-sm text-blue-400 sm:text-3xl lg:text-5xl">
                {skill}
                <span>{index === highlightSkills.length - 1 ? "" : `, `}</span>
              </span>
            ))}
          </span>
        </p>
        <div className="m-5 h-[5px] w-[55%] bg-slate-400" />
      </h2>

      <section className="my-4 grid h-fit xl:w-[80%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AboutCard
          img={frontend}
          title={"Frontend Development"}
          description={
            "Experience with React and Angular. Learning how to use Next.js"
          }
        />
        <AboutCard
          img={backend}
          title={"Backend Development"}
          description={
            "Experience with GraphQL and REST API. Worked with SQL databases (Oracle, mySQL, and PostGreSQL)"
          }
        />
        <AboutCard
          img={learning}
          title={"Learning Projects"}
          description={
            "Always looking to learn new technologies. Current efforts being: Next.js"
          }
        />
        <AboutCard
          img={ballroom}
          title={"Interests and Hobbies"}
          description={
            "I enjoy life outside of coding as well! I like ballroom dancing, badminton, and reading. Book of the week:"
          }
        />
      </section>
    </section>
  );
};

export default About;
