import { useEffect, useState } from "react";
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

  return (
    <section className={cn(className)}>
      {skillLevels.map((skillLevel: SkillLevel) => {
        let skills = filteredSkills[skillLevel.name];

        if (!skills) {
          return <span>loading...</span>;
        }

        return (
          <section className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-3xl my-10">{skillLevel.name}</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8">
              {skills.map((skill) => (
                <SkillLogoBubble
                  key={skill.name}
                  className="scale-25 md:scale-90 lg:scale-100"
                  skill={skill}
                />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default SkillsContainer;
