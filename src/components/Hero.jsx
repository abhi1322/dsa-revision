const Hero = () => {
  return (
    <section className="grid grid-row-2 md:grid-cols-2 gap-20 ">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold leading-8 text-neutral-800">
          Best way to revise for your next coding interview
        </h1>
        <p className="mt-4 text-neutral-400">
          Get everything in a single guide: Data structures, algorithms,
          patterns, visualizers, questions, examples, solutions, explanations,
          and much more!
        </p>

        <div className="relative ">
          <button className="relative hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 hover:bg-pink-400 hover:border-pink-700 hover:border ease-out mt-8 bg-neutral-300 rounded-md w-full flex justify-center items-center py-3">
            Buy free through the
            <span className="pl-1 font-bold uppercase"> Gumroad</span>
          </button>
          <div className="w-full h-[48px] rounded-md -z-10 translate-y-8 bg-neutral-300 absolute top-0 left-0"></div>
        </div>

        <div className="mt-8 relative bg-neutral-100 p-8 border-l-4 border-orange-300">
          <p className="text-neutral-400">
            "Awesome! Love how the concepts are explained + all the wonderful
            resources mentioned. Having everything in one guide is super
            helpful."
          </p>
          <div className="w-4 h-4 absolute -bottom-2 rotate-45 bg-neutral-100"></div>
        </div>
        <div className="flex h-10 gap-2 w-full justify-center items-center">
          <span className="w-2 h-2 rounded-full bg-gray-400 "></span>
          <span className="w-2 h-2 rounded-full bg-gray-200 "></span>
          <span className="w-2 h-2 rounded-full bg-gray-200 "></span>
        </div>
      </div>

      <div className="relative flex ">
        <img
          src="./public/dsa-main.png"
          alt="book cover"
          className="w-full md:w-[25vw] self-start object-cover"
        />
        <p className="w-32 h-32 p-8 absolute leading-5 font-bold text-white bg-green-500 flex justify-center items-center text-center rounded-full -top-8 right-0">
          New Release
        </p>
      </div>
    </section>
  );
};

export default Hero;
