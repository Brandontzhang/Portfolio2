import SectionHeader from "../components/SectionHeader";
import ProjectCardCarousel from "../components/ProjectsSectionComponents/ProjectCardCarousel";
import ProjectTypeButton from "../components/ProjectsSectionComponents/ProjectTypeButton";
import { WorkTypeContextProvider } from "../context/WorkTypeContextProvider";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Project } from "../types";
import SectionWrap from "../wrapper/SectionWrap";
import { wave1 } from "../assets/images";

const Projects = () => {
    const { data: projects } = useQuerySanity<Project>(
        `*[_type=="projects"] | order(_createdAt asc)`,
    );

    // TODO: pull WorkTypes from the projects query
    const WorkTypes = ["Work", "Project", "Web App", "All"];

    return (
        <WorkTypeContextProvider>
            <SectionWrap
                sectionName="projects"
                className="relative items-center justify-around overflow-hidden"
            >
                <SectionHeader className="z-10 2xl:mb-0">
                    <span>Work Experiences</span> & <span>Projects</span>
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
                    className="relative z-10 -m-40 flex h-[850px] w-[100dvh] scale-50 items-center justify-center sm:-m-0 sm:scale-75 md:scale-100 lg:m-20"
                    projects={projects}
                />

                <img
                    className="absolute left-0 right-0 top-0 h-full w-full object-cover"
                    src={wave1}
                />
            </SectionWrap>
        </WorkTypeContextProvider>
    );
};

export default Projects;
