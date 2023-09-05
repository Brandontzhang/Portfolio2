import ExperiencesContainer from "../components/ExperienceSectionComponents/ExperiencesContainer";
import SectionHeader from "../components/SectionHeader";
import SkillsContainer from "../components/SkillsSectionComponents/SkillsContainer";
import SectionWrap from "../wrapper/SectionWrap";

const SkillsAndExperience = () => {
    return (
        <SectionWrap
            sectionName={"skills"}
            className="relative items-center justify-around"
        >
            <SectionHeader>
                <span className="font-bold">Skills &&nbsp;</span>
                <span className="font-bold">Experience</span>
            </SectionHeader>

            <div className="flex-1 flex flex-col lg:flex-row w-full md:px-20">
                <SkillsContainer className="flex-1" />
                <ExperiencesContainer className="flex-1" />
            </div>
        </SectionWrap>
    );
};

export default SkillsAndExperience;
