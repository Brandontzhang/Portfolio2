import { frontend } from "../assets/images";
import AboutCard from "../components/AboutCard";

const About = () => {
  const highlightSkills = ["Angular", "React", "TypeScript", "Java"];

  return (
    <section>
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
        <div className="w-[55%] h-[5px] bg-slate-400 m-5" />
      </h2>


      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <AboutCard img={frontend} title={"Laborum qui qui ."} description={"Est ut sit ut non in non sit ex. s enim voluptate laborum qui nisi elit."} />
        <AboutCard img={frontend} title={"Esse officia ve"} description={"Fugiat ex ipsum proident veniam sit Lorem. Cupidatat nisi proident elit velit. Commodo excepteur duis ex eu."} />
        <AboutCard img={frontend} title={"Ut Lorem eu Lore"} description={"Velit voluptate ipsum consectetur dolore magna enim dolore id veniam est. Id non ex et occaecat cupidatat officia excepteur aliquip elit id excepteur laborum eu sint."}/>
        <AboutCard img={frontend} title={"Consectetur Lore"} description={"Esse excepteur in irure consectetur eiusmod. Ullamco reprehenderit dolor minim dolor sit et et minim adipisicing enim cillum proident. Duis non dolor adipisicing quis proident fugiat eiusmod cupidatat non eiusmod."} />
      </section>

    </section>
  );
};

export default About;
