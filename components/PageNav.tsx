import Image from "next/image";

const PageNav = () => {
  return (
    <div className="hidden md:bg-neutral-900 md:py-3 md:px-7 md:fixed md:h-full md:flex md:flex-col md:w-80 md:items-center md:justify-center md:border-r-4 md:border-neutral-100">
      <a href="#">
        <Image
          alt="aftermath logo large"
          src="/images/tattoo-logo-2.PNG"
          width={200}
          height={200}
          priority
        />
      </a>
      <a
        href="#"
        className="text-5xl text-neutral-100 mt-14 transition ease-in-out duration-300 hover:scale-110"
      >
        Gallery
      </a>
      <a
        href="#"
        className="text-5xl text-neutral-100 mt-10 transition ease-in-out duration-300 hover:scale-110"
      >
        Book Now
      </a>
      <a
        href="#"
        className="text-5xl text-neutral-100 mt-10 transition ease-in-out duration-300 hover:scale-110"
      >
        FAQ
      </a>
    </div>
  );
};

export default PageNav;
