import SkillsContainer from "../components/SkillsSectionComponents/SkillsContainer";
import { useQuerySanity } from "../hooks/useQuerySanity";
import { Experience } from "../types";
import SectionWrap from "../wrapper/SectionWrap";

const SkillsAndExperience = () => {
  const { data: experience } = useQuerySanity<Experience>(
    `*[_type=="experiences"] | order(year desc)`,
  );

  return (
    <SectionWrap sectionName={"skills"}>
      <section className="flex min-h-screen w-full flex-col items-center justify-center">
        <h1 className="m-8 mb-10 text-[1.25rem] md:text-3xl lg:text-5xl">
          My <span className="font-bold text-orange-400">Skills</span> and{" "}
          <span className="font-bold text-orange-400">Experience</span>
        </h1>

        <div className="flex flex-col md:flex-row w-full">
          <SkillsContainer className="flex-1 m-10" />
          <section className="flex-1">Experience</section>
        </div>
      </section>
    </SectionWrap>
  );
};

export default SkillsAndExperience;
