import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col font-header text-6xl text-neutral-800 bg-neutral-100 font-bold justify-center items-center h-screen md:ml-80 px-4 lg:text-8xl">
        <p>Aftermath</p>
        <p>Tattoos</p>
      </div>
      <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold bg-neutral-300 text-neutral-800 md:ml-80">
        Photos Section
      </div>
    </>
  );
};

export default Home;
