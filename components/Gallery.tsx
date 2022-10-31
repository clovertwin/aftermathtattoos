import { useState, useEffect } from "react";
import { ImageType } from "../lib/typings";
import GalleryImage from "./GalleryImage";

interface Props {
  images: ImageType[];
}

const Gallery = ({ images }: Props) => {
  const [loadedImages, setLoadedImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const initialImages: ImageType[] = [];
    images.forEach((img, i) => {
      if (i < 6) {
        initialImages.push(img);
      }
    });
    setLoadedImages(initialImages);
    return () => setLoadedImages([]);
  }, [images]);

  const loadMore = () => {
    const moreImages: ImageType[] = [];
    images.forEach((img, i) => {
      if (i > loadedImages.length - 1 && i < loadedImages.length + 6) {
        moreImages.push(img);
      }
    });
    setLoadedImages((prev) => [...prev, ...moreImages]);
  };

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
      <div className="px-4 py-6 bg-neutral-900 grid grid-cols-2 auto-rows-auto gap-5 sm:gap-x-5 sm:gap-y-12 sm:py-12 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
        {loadedImages.map((image) => {
          return <GalleryImage key={image._id} {...image} />;
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-3 border-b-2 border-neutral-100 text-2xl text-neutral-100 transition ease-in-out duration-300 lg:text-3xl hover:cursor-pointer hover:scale-110"
          onClick={loadMore}
        >
          See More...
        </button>
      </div>
    </section>
  );
};

export default Gallery;
