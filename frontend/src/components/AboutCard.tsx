const AboutCard = (props: any) => {
  const { img, title, description } = props;

  const dimensions = 250;

  return (
    <section className="flex flex-col justify-center items-center h-fit m-8 hover:scale-110 transition-all ease-in-out duration-500">
      <div className={`h-fit max-h-[${dimensions}px] w-full max-w-[${dimensions}px] xl:max-h-[400px] xl:max-w-[400px] rounded-lg shadow-2xl`}>
        <img className="aspect-square rounded-lg" src={img} />
      </div>
      <div className={`flex flex-col justify-center items-start max-w-[${dimensions}px] xl:max-w-[400px]`}>
        <h3 className="flex h-full text-2xl font-bold my-4">
          {title}
        </h3>
        <p className="overflow-hidden">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutCard;
