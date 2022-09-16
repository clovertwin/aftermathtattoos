import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center h-screen w-full px-4 bg-zinc-800">
      <h1 className="text-7xl font-header font-bold text-neutral-50 md:text-8xl lg:text-8xl">
        Aftermath Tattoos
      </h1>
      <p className="text-lg font-sans text-neutral-50">(header font)</p>
      <h2 className="mt-10 text-4xl font-serif text-neutral-50 md:text-5xl">
        Strive for Greatness
      </h2>
      <p className="text-lg font-sans text-neutral-50">(sub-header font)</p>
      <p className="mt-10 text-lg font-sans text-neutral-50 md:text-xl">
        This is a font for chunks of wrinting that will look good small.
      </p>
      <p className="text-lg font-sans text-neutral-50">(body font)</p>
    </div>
  );
};

export default Home;
