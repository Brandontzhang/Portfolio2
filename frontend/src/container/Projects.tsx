import SectionHeader from "../components/SectionHeader";
import ProjectCardCarousel from "../components/ProjectsSectionComponents/ProjectCardCarousel";
import ProjectTypeButton from "../components/ProjectsSectionComponents/ProjectTypeButton";
import { WorkTypeContextProvider } from "../context/WorkTypeContextProvider";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Project } from "../types";
import SectionWrap from "../wrapper/SectionWrap";
import { wave1 } from "../assets/images";
import { useEffect, useState } from "react";

const Projects = () => {
    const { data: projects } = useQuerySanity<Project>(
        `*[_type=="projects"] | order(_createdAt asc)`,
    );

    const [workTypes, setWorkTypes] = useState(new Set<string>(["All"]));

    useEffect(() => {
        projects.forEach((project) => {
            if (project.types) {
                setWorkTypes((prev) => new Set([...prev, ...project.types]));
            }
        });
    }, [projects]);

    return (
        <WorkTypeContextProvider>
            <SectionWrap
                sectionName="projects"
                className="relative items-center justify-around overflow-hidden"
            >
                <SectionHeader className="z-10 2xl:mb-0">
                    <span>Work Experiences</span> & <span>Projects</span>
                </SectionHeader>

                <section className="z-10 mt-5 flex w-[95%] sm:justify-center overflow-x-auto whitespace-nowrap sm:mt-10 space-x-4">
                    {Array.from(workTypes).map((workType: string) => (
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
