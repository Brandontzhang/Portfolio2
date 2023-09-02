import SectionHeader from "../components/SectionHeader";
import ProjectCardCarousel from "../components/ProjectsSectionComponents/ProjectCardCarousel";
import ProjectTypeButton from "../components/ProjectsSectionComponents/ProjectTypeButton";
import { WorkTypeContextProvider } from "../context/WorkTypeContextProvider";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Project } from "../types";
import SectionWrap from "../wrapper/SectionWrap";

const Projects = () => {
    const WorkTypes = ["Work", "Project", "Web App", "All"];

    const { data: projects } = useQuerySanity<Project>(
        `*[_type=="projects"] | order(_createdAt asc)`,
    );

    return (
        <WorkTypeContextProvider>
            <SectionWrap
                sectionName="projects"
                className="items-center justify-around overflow-hidden"
            >
                <SectionHeader className="2xl:mb-0">
                    <span className="text-orange-400">Work Experiences</span>{" "}
                    and <span className="text-orange-400">Projects</span>
                </SectionHeader>

                <section className="mt-5 flex w-[95dvw] justify-center overflow-x-auto whitespace-nowrap sm:mt-10">
                    {WorkTypes.map((workType: string) => (
                        <ProjectTypeButton
                            key={workType}
                            className="text-sm md:text-xl"
                            label={workType}
                        />
                    ))}
                </section>

                <ProjectCardCarousel
                    className="relative flex -m-40 sm:-m-0 lg:m-20 h-[850px] w-[100dvh] scale-50 sm:scale-75 items-center justify-center md:scale-100"
                    projects={projects}
                />
            </SectionWrap>
        </WorkTypeContextProvider>
    );
};

export default Projects;
