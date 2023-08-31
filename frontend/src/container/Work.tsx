import ProjectCard from "../components/ProjectCard";
import WorkTypeButton from "../components/WorkTypeButton";
import { WorkTypeContextProvider } from "../context/WorkTypeContextProvider";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Project } from "../types";



const Work = () => {
  const WorkTypes = ["Work", "Projects", "Web Apps", "All"];

  const { data: projects } = useQuerySanity<Project>(
    `*[_type=="projects"] | order(_createdAt asc)`,
  );

  return (
    <WorkTypeContextProvider>
      <section className="flex w-full flex-col items-center justify-center lg:mt-36">
        <h2 className="flex w-full justify-center font-bold sm:text-xl">
          <span className="text-center text-[1.25rem] md:text-3xl lg:text-5xl">
            My <span className="text-orange-400">Work Experiences</span> and{" "}
            <span className="text-orange-400">Projects</span>
          </span>
        </h2>

        <section className="flex w-[95dvw] justify-center overflow-x-auto whitespace-nowrap lg:my-40">
          {WorkTypes.map((workType: string) => (
            <WorkTypeButton
              key={workType}
              className="text-sm md:text-xl"
              label={workType}
            />
          ))}
        </section>

        <section className="flex flex-row w-[95dvw] overflow-x-scroll">
          {projects.map(project => <ProjectCard key={project.name} project={project} />)}
        </section>
      </section>
    </WorkTypeContextProvider>
  );
};

export default Work;
