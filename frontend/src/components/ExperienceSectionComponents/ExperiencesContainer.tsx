import { useQuerySanity } from "../../hooks/useQuerySanity";
import { Experience, Work } from "../../types";
import { cn } from "../../utils";
import WorkDetails from "./WorkDetails";

type ExperiencesContainerType = {
  className: string;
};

const ExperiencesContainer = ({ className }: ExperiencesContainerType) => {
  const getExperiencesQuery: string = `
        *[_type=="experiences"] {year, works[]{name, company, desc, current, endDate}} | order(year desc)
    `;

  const { data: experience } = useQuerySanity<Experience>(getExperiencesQuery);

  const sortWorksByEndDate = (works: Work[]) => {
    works.sort((a, b) => {
      const dateA = new Date(a.endDate);
      const dateB = new Date(b.endDate);
      return dateB.getTime() - dateA.getTime();
    });

    return works;
  };

  return (
    <section className={cn(className, "flex flex-col")}>
      <div className="my-10 flex w-full flex-col">
        {experience.map((experience) => {
          return (
            <div
              key={experience.year}
              className="my-10 flex w-full flex-col sm:flex-row"
            >
              <h2 className="flex flex-[0.25] justify-center text-3xl font-bold text-amber-500">
                {experience.year}
              </h2>
              <div className="flex flex-1 flex-col items-center sm:items-start">
                {sortWorksByEndDate(experience.works).map((work) => (
                  <WorkDetails key={work.name} work={work} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesContainer;
