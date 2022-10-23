import type { NextPage } from "next";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Faq from "../components/Faq";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Booking />
      <Faq />
    </>
  );
};

export default Home;
