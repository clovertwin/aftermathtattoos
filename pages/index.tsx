import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col px-4 font-header text-6xl text-neutral-100 bg-neutral-900 font-bold justify-center items-center h-screen sm:text-8xl md:ml-80 lg:text-9xl">
        <p>Aftermath</p>
        <p>Tattoos</p>
      </div>
      <div className="h-screen flex flex-col items-center justify-center text-4xl font-serif font-bold bg-neutral-300 text-neutral-900 md:ml-80">
        Photos Section
      </div>
    </>
  );
};

export default Home;
