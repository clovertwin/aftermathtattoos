import Image from "next/image";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-neutral-900 md:ml-80">
      <h2 className="text-5xl font-bold text-center text-neutral-100">
        Gallery
      </h2>
      <div className="mt-4 px-4 py-4 bg-neutral-900 grid grid-cols-1 auto-rows-auto gap-5 place-content-center lg:grid-cols-2">
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[400px] h-[500px] bg-neutral-900 overflow-hidden justify-self-center">
          <Image
            alt="img1"
            src="/images/tattoo1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[400px] h-[500px] bg-neutral-900 overflow-hidden justify-self-center">
          <Image
            alt="img2"
            src="/images/tattoo2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[400px] h-[500px] bg-neutral-900 overflow-hidden justify-self-center">
          <Image
            alt="img3"
            src="/images/tattoo3.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[400px] h-[500px] bg-neutral-900 shadow-lg overflow-hidden justify-self-center">
          <Image
            alt="img4"
            src="/images/tattoo4.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
