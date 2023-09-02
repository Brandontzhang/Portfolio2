import ExperiencesContainer from "../components/ExperienceSectionComponents/ExperiencesContainer";
import SkillsContainer from "../components/SkillsSectionComponents/SkillsContainer";
import SectionWrap from "../wrapper/SectionWrap";

const SkillsAndExperience = () => {
  return (
    <SectionWrap sectionName={"skills"}>
      <section className="flex min-h-screen w-full flex-col items-center justify-center">
        <h1 className="m-8 mb-10 text-[1.25rem] md:text-3xl lg:text-5xl text-center">
          <span className="font-bold">Skills</span> &{" "}
          <span className="font-bold">Experience</span>
        </h1>

        <div className="flex flex-col lg:flex-row w-full md:px-20">
          <SkillsContainer className="flex-1" />
          <ExperiencesContainer className="flex-1"/>
        </div>
      </section>
    </SectionWrap>
  );
};

export default SkillsAndExperience;
