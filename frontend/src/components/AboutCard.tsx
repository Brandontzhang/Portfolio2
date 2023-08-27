import { cn } from "../utils";

const AboutCard = (props: any) => {
  const { img, title, description, className } = props;

  return (
    <section
      style={{ gridTemplateRows: "repeat(8, 80px)" }}
      className={cn(
        className,
        "m-4 grid grid-cols-1 items-center justify-items-center rounded-lg bg-slate-200 p-8 drop-shadow-lg xl:h-[672px]",
      )}
    >
      <div className="row-span-5 my-auto h-fit max-h-[400px] w-full max-w-[400px] rounded-lg shadow-2xl">
        <img className="aspect-square rounded-lg" src={img} />
      </div>
      <h3 className="row-span-1 my-auto flex h-full items-center justify-center text-2xl">
        {title}
      </h3>
      <p className="row-span-2 m-auto h-full content-start justify-items-start overflow-hidden">
        {description}
      </p>
    </section>
  );
};

export default AboutCard;
