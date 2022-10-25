import Image from "next/image";

const Gallery = () => {
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
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img1"
            src="/images/tattoo1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img2"
            src="/images/tattoo2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img3"
            src="/images/tattoo3.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 shadow-lg overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img4"
            src="/images/tattoo4.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 shadow-lg overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img5"
            src="/images/tattoo5.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 shadow-lg overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
          <Image
            alt="img6"
            src="/images/tattoo6.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
