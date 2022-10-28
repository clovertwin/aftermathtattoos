import type { GetServerSideProps } from "next";
import { sanityClient } from "../lib/client";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Faq from "../components/Faq";
import { ImageType } from "../lib/typings";

interface Props {
  images: ImageType[];
}

const Home = ({ images }: Props) => {
  return (
    <>
      <Hero />
      <Gallery images={images} />
      <Booking />
      <Faq />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = "*[_type == 'gallery']";
  const images = await sanityClient.fetch(query);
  return {
    props: {
      images,
    },
  };
};

export default Home;
