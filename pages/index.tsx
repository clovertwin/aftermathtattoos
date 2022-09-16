import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center h-screen w-full px-4 bg-cover overflow-hidden bg-blend-color-burn bg-statue bg-center">
      <h1 className="text-7xl font-header font-bold text-neutral-50 md:text-8xl lg:text-[140px]">
        Aftermath Tattoos
      </h1>
      <p className="text-lg font-sans text-neutral-50 md:text-2xl">
        (header font)
      </p>
      <h2 className="mt-10 font-semibold text-4xl font-serif text-neutral-50 md:text-5xl lg:text-7xl">
        Strive for Greatness
      </h2>
      <p className="text-lg font-sans text-neutral-50 md:text-2xl">
        (sub-header font)
      </p>
      <p className="mt-10 text-lg font-sans text-neutral-50 md:text-2xl">
        This is a font for chunks of wrinting that will look good small.
      </p>
      <p className="text-lg font-sans text-neutral-50 md:text-2xl">
        (body font)
      </p>
    </div>
  );
};

export default Home;
