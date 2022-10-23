import Image from "next/image";

const PageNav = () => {
  return (
    <div className="hidden md:bg-neutral-800 md:py-3 md:px-7 md:fixed md:h-full md:flex md:flex-col md:w-80 md:items-center md:shadow-lg md:shadow-neutral-800">
      <a href="#" className="mt-28">
        <Image
          alt="aftermath logo large"
          src="/images/tattoo-logo-2.PNG"
          width={150}
          height={150}
        />
      </a>
      <a
        href="#"
        className="text-2xl font-serif text-neutral-100 mt-14 mb-10 transition ease-in-out duration-300 hover:scale-110"
      >
        Tattoos
      </a>
      <a
        href="#"
        className="text-2xl font-serif text-neutral-100 transition ease-in-out duration-300 hover:scale-110"
      >
        Book Now
      </a>
    </div>
  );
};

export default PageNav;
