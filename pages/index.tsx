import type { NextPage } from "next";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Faq from "../components/Faq";

const GALLERY_IMAGES = [
  { alt: "tattoo picture 1", path: "/images/tattoo1.jpg" },
  { alt: "tattoo picture 2", path: "/images/tattoo2.jpg" },
  { alt: "tattoo picture 3", path: "/images/tattoo3.jpg" },
  { alt: "tattoo picture 4", path: "/images/tattoo4.jpg" },
  { alt: "tattoo picture 5", path: "/images/tattoo5.jpg" },
  { alt: "tattoo picture 6", path: "/images/tattoo6.jpg" },
];

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Gallery images={GALLERY_IMAGES} />
      <Booking />
      <Faq />
    </>
  );
};

export default Home;
