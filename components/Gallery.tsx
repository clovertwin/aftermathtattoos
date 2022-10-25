import { TattooImg } from "../lib/types";
import GalleryImage from "./GalleryImage";

interface Props {
  images: TattooImg[];
}

const Gallery = ({ images }: Props) => {
  return (
    <section
      id="gallery"
      className="bg-neutral-900 md:ml-80 scroll-m-20 md:scroll-m-0"
    >
      <div className="border-b-4 border-neutral-100">
        <h2 className="text-5xl font-bold text-neutral-100 lg:text-6xl">
          Gallery
        </h2>
      </div>
      <div className="px-4 py-12 bg-neutral-900 grid grid-cols-2 auto-rows-auto gap-x-5 gap-y-12 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => {
          return <GalleryImage key={image.alt} {...image} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
