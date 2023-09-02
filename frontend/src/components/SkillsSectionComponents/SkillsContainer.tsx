import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuerySanity } from "../../hooks/useQuerySanity";
import { Skill, SkillLevel } from "../../types";
import { cn } from "../../utils";
import SkillLogoBubble from "./SkillLogoBubble";

type SkillLevelContainerPropsType = {
  className?: string;
};

const SkillsContainer = ({ className }: SkillLevelContainerPropsType) => {
  const [filteredSkills, setFilteredSkills] = useState<Record<string, Skill[]>>(
    {},
  );

  const { data: skillLevels } = useQuerySanity<SkillLevel>(
    `*[_type=="skillLevel"] | order(order desc)`,
  );

  const { data: skills } = useQuerySanity<Skill>(
    `*[_type=="skills"] {
      name,
      icon,
      skilllevel -> {
        name,
        order
      }
    } | order(_createdAt asc)`,
  );

  useEffect(() => {
    skillLevels.forEach((skillLevel) => {
      setFilteredSkills((prevFilteredSkills) => {
        return {
          ...prevFilteredSkills,
          [skillLevel.name]: skills.filter(
            (skill) => skill.skilllevel.order === skillLevel.order,
          ),
        };
      });
    });
  }, [skillLevels, skills]);

  const renderedSkills = useMemo(() => 
    skillLevels.map((skillLevel: SkillLevel) => {
      let skills = filteredSkills[skillLevel.name];

      if (!skills) {
        return <span key={skillLevel.order}>loading...</span>;
      }

      return (
        <section
          key={skillLevel.order}
          className="flex w-full flex-col items-center md:items-start"
        >
          <h1 className="my-10 text-3xl">{skillLevel.name}</h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8">
            {skills.map((skill) => (
              <SkillLogoBubble
                key={skill.name}
                className="scale-50 md:scale-90 lg:scale-100"
                skill={skill}
              />
            ))}
          </div>
        </section>
      );
    }), [skillLevels])

  return (
    <section className={cn(className)}>
      {renderedSkills}
    </section>
  );
};

export default SkillsContainer;
